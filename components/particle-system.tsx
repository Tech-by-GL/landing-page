"use client"

import { useEffect, useRef, useState } from "react"
import { useTheme } from "next-themes"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
  opacity: number
  life: number
  maxLife: number
}

interface ParticleSystemProps {
  count?: number
  colors?: string[]
  minSize?: number
  maxSize?: number
  minSpeed?: number
  maxSpeed?: number
  className?: string
}

export function ParticleSystem({
  count = 50,
  colors = ["#0d99ff", "#ffde59"],
  minSize = 2,
  maxSize = 6,
  minSpeed = 0.1,
  maxSpeed = 0.5,
  className = "",
}: ParticleSystemProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const particlesRef = useRef<Particle[]>([])
  const animationRef = useRef<number>(0)
  const { theme } = useTheme()

  // Initialize particles
  const initParticles = () => {
    if (!canvasRef.current) return

    const width = canvasRef.current.width
    const height = canvasRef.current.height
    const particles: Particle[] = []

    for (let i = 0; i < count; i++) {
      const themeColors = theme === "dark" ? [...colors, "#ffffff"] : colors
      const color = themeColors[Math.floor(Math.random() * themeColors.length)]
      const size = Math.random() * (maxSize - minSize) + minSize
      const maxLife = Math.random() * 100 + 100

      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size,
        speedX: (Math.random() - 0.5) * (maxSpeed - minSpeed) + minSpeed,
        speedY: (Math.random() - 0.5) * (maxSpeed - minSpeed) + minSpeed,
        color,
        opacity: Math.random() * 0.5 + 0.1,
        life: 0,
        maxLife,
      })
    }

    particlesRef.current = particles
  }

  // Animation loop
  const animate = () => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Update and draw particles
    particlesRef.current.forEach((particle, index) => {
      // Update position
      particle.x += particle.speedX
      particle.y += particle.speedY
      particle.life += 1

      // Calculate opacity based on life
      const lifeRatio = particle.life / particle.maxLife
      const fadeInOut = lifeRatio < 0.2 ? lifeRatio * 5 : lifeRatio > 0.8 ? (1 - lifeRatio) * 5 : 1

      const currentOpacity = particle.opacity * fadeInOut

      // Draw particle
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
      ctx.fillStyle = `${particle.color}${Math.floor(currentOpacity * 255)
        .toString(16)
        .padStart(2, "0")}`
      ctx.fill()

      // Reset particle if it goes off screen or dies
      // if (
      //   particle.x < -particle.size ||
      //   particle.x > canvas.width + particle.size ||
      //   particle.y < -particle.size ||
      //   particle.y > canvas.height + particle.size ||
      //   particle.life >= particle.maxLife
      // ) {
      //   // Reset position
      //   if (Math.random() > 0.5) {
      //     particle.x = Math.random() * canvas.width
      //     particle.y = Math.random() > 0.5 ? -particle.size : canvas.height + particle.size
      //   } else {
      //     particle.x = Math.random() > 0.5 ? -particle.size : canvas.width + particle.size
      //     particle.y = Math.random() * canvas.height
      //   }

      //   // Reset properties
      //   particle.life = 0
      //   particle.opacity = Math.random() * 0.5 + 0.1
      //   particle.speedX = (Math.random() - 0.5) * (maxSpeed - minSpeed) + minSpeed
      //   particle.speedY = (Math.random() - 0.5) * (maxSpeed - minSpeed) + minSpeed
      // }

      // --- SAU (sinh ngẫu nhiên toàn khung) ---
if (
  particle.x < -particle.size ||
  particle.x > canvas.width + particle.size ||
  particle.y < -particle.size ||
  particle.y > canvas.height + particle.size ||
  particle.life >= particle.maxLife
) {
  // Rải lại trong toàn bộ canvas
  particle.x = Math.random() * canvas.width
  particle.y = Math.random() * canvas.height

  // Làm mới thuộc tính
  particle.life = 0
  particle.maxLife = Math.random() * 100 + 100
  particle.size = Math.random() * (maxSize - minSize) + minSize
  particle.opacity = Math.random() * 0.5 + 0.1
  particle.speedX = (Math.random() - 0.5) * (maxSpeed - minSpeed) + minSpeed
  particle.speedY = (Math.random() - 0.5) * (maxSpeed - minSpeed) + minSpeed
  // (giữ nguyên particle.color)
}
    })

    animationRef.current = requestAnimationFrame(animate)
  }

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current && canvasRef.current.parentElement) {
        const parent = canvasRef.current.parentElement
        const width = parent.clientWidth
        const height = parent.clientHeight

        setDimensions({ width, height })
        canvasRef.current.width = width
        canvasRef.current.height = height

        // Reinitialize particles when canvas size changes
        initParticles()
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  // Start animation
  useEffect(() => {
    if (dimensions.width > 0 && dimensions.height > 0) {
      initParticles()
      animate()
    }

    return () => {
      cancelAnimationFrame(animationRef.current)
    }
  }, [dimensions, theme])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ width: "100%", height: "100%" }}
    />
  )
}
