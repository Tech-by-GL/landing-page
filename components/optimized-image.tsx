"use client";

import { useState, useEffect } from "react";
import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/utils";

interface OptimizedImageProps extends Omit<ImageProps, "onLoad" | "onError"> {
  fallbackSrc?: string;
  lowQualitySrc?: string;
  loadingClassName?: string;
  src: string;
}

export function OptimizedImage({
  src,
  alt,
  fallbackSrc = "/placeholder.svg",
  lowQualitySrc,
  className,
  loadingClassName,
  ...props
}: OptimizedImageProps) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(lowQualitySrc || src);

  useEffect(() => {
    // Reset states when src changes
    setLoading(true);
    setError(false);
    setCurrentSrc(lowQualitySrc || src);
  }, [src, lowQualitySrc]);

  const handleLoad = () => {
    // If we're using a low quality placeholder, switch to the real image
    if (lowQualitySrc && currentSrc === lowQualitySrc) {
      setCurrentSrc(src);
    } else {
      setLoading(false);
    }
  };

  const handleError = () => {
    setError(true);
    setLoading(false);
    if (fallbackSrc) {
      setCurrentSrc(fallbackSrc);
    }
  };

  return (
    <div className={cn("relative", className)}>
      {loading && (
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center bg-gray-100 animate-pulse",
            loadingClassName
          )}
        >
          <span className="sr-only">Loading...</span>
        </div>
      )}

      <img
        key={error ? fallbackSrc : currentSrc} // Ensure Image re-renders when src changes
        src={error ? fallbackSrc : currentSrc}
        alt={alt}
        className={cn(
          "transition-opacity duration-300",
          loading ? "opacity-0" : "opacity-100"
        )}
        style={{
          // height: alt?.includes("KET") ? "110%" : "100%",
          // height: alt?.includes("IELTS") || alt?.includes("Foundation") ? "100%" : "220px",
          height: "100%",
          overflow: "hidden",
          objectFit: "fill",
        }}
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />
    </div>
  );
}
