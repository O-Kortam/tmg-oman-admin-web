"use client";

import { useState } from "react";
import { Play } from "lucide-react";

export default function Video({ id }: { id: string }) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (!id) return null;

  const thumbnail = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
  const embedUrl = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1`;

  return (
      <div className="w-full h-full aspect-video relative rounded-lg overflow-hidden shadow-lg">
        {isPlaying ? (
          <iframe
            className="w-full h-full"
            src={embedUrl}
            title="YouTube video"
            loading="lazy"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <button
            onClick={() => setIsPlaying(true)}
            className="w-full h-full relative group"
          >
            <img
              src={thumbnail}
              alt="YouTube Thumbnail"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50">
              <Play className="w-16 h-16 text-white drop-shadow-lg" />
            </div>
          </button>
        )}
      </div>

  );
}
