'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Sparkles, Music } from 'lucide-react';

interface AudioAmbienceProps {
  theme?: 'kotte_flute' | 'temple_chant' | 'cascade_water' | 'ocean_breeze';
  compact?: boolean;
}

export default function AudioAmbience({ theme = 'kotte_flute', compact = false }: AudioAmbienceProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.4);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Synthesize rich ancient ambient soundscape using Web Audio API
  const startAudio = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(volume, ctx.currentTime);
      masterGain.connect(ctx.destination);
      masterGainRef.current = masterGain;

      // Base warm drone (Tanpura / resonant singing bowl resonance)
      const baseFreq = theme === 'temple_chant' ? 108 : theme === 'kotte_flute' ? 216 : 144;
      
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const droneGain = ctx.createGain();
      droneGain.gain.value = 0.15;

      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(baseFreq, ctx.currentTime);
      
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(baseFreq * 1.5, ctx.currentTime); // Perfect fifth harmonic

      // Filter for warm antique atmosphere
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(600, ctx.currentTime);

      osc1.connect(droneGain);
      osc2.connect(droneGain);
      droneGain.connect(filter);
      filter.connect(masterGain);

      osc1.start();
      osc2.start();

      // Periodic serene temple bell / bamboo chime note
      const playChime = () => {
        if (!audioCtxRef.current || audioCtxRef.current.state === 'closed') return;
        const now = audioCtxRef.current.currentTime;
        
        // Pentatonic frequencies reminiscent of ancient Asian melodies: D, E, G, A, B
        const scale = [293.66, 329.63, 392.00, 440.00, 493.88, 587.33];
        const randomFreq = scale[Math.floor(Math.random() * scale.length)];

        const chimeOsc = audioCtxRef.current.createOscillator();
        const chimeGain = audioCtxRef.current.createGain();

        chimeOsc.type = theme === 'kotte_flute' ? 'sine' : 'triangle';
        chimeOsc.frequency.setValueAtTime(randomFreq, now);

        // Gentle envelope
        chimeGain.gain.setValueAtTime(0, now);
        chimeGain.gain.linearRampToValueAtTime(0.08, now + 0.5);
        chimeGain.gain.exponentialRampToValueAtTime(0.0001, now + 4.5);

        chimeOsc.connect(chimeGain);
        chimeGain.connect(masterGain);

        chimeOsc.start(now);
        chimeOsc.stop(now + 5);
      };

      // Play initial chime
      playChime();
      // Periodically trigger ambient accents every 4-7 seconds
      intervalRef.current = setInterval(playChime, 5200);

      setIsPlaying(true);
    } catch {
      // AudioContext policy handled
    }
  };

  const stopAudio = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (audioCtxRef.current) {
      audioCtxRef.current.close();
      audioCtxRef.current = null;
    }
    setIsPlaying(false);
  };

  const toggleAudio = () => {
    if (isPlaying) {
      stopAudio();
    } else {
      startAudio();
    }
  };

  useEffect(() => {
    if (masterGainRef.current && audioCtxRef.current) {
      masterGainRef.current.gain.setValueAtTime(volume, audioCtxRef.current.currentTime);
    }
  }, [volume]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (audioCtxRef.current) audioCtxRef.current.close();
    };
  }, []);

  return (
    <div className={`flex items-center gap-2 ${compact ? '' : 'px-3 py-1.5 rounded-full bg-obsidian-900/80 border border-gold-500/30 backdrop-blur-md text-xs'}`}>
      <button
        onClick={toggleAudio}
        aria-label="Toggle ancient ambient sound"
        className={`flex items-center gap-1.5 transition-colors ${isPlaying ? 'text-gold-400 font-medium' : 'text-stone-400 hover:text-parchment-200'}`}
        title={isPlaying ? "Mute Historical Ambience" : "Play Ancient Ceylon Ambience"}
      >
        {isPlaying ? (
          <>
            <Volume2 className="w-4 h-4 text-gold-400 animate-pulse" />
            {!compact && <span>Ambience: ON</span>}
          </>
        ) : (
          <>
            <VolumeX className="w-4 h-4" />
            {!compact && <span>Ambience: OFF</span>}
          </>
        )}
      </button>

      {isPlaying && !compact && (
        <input
          type="range"
          min="0"
          max="1"
          step="0.05"
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          className="w-16 h-1 bg-obsidian-700 rounded-lg appearance-none cursor-pointer accent-gold-500"
        />
      )}
    </div>
  );
}
