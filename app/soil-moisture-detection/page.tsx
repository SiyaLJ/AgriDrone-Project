'use client'

import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Droplets } from "lucide-react";

const SoilMoistureDetection = () => {
  const [isDetecting, setIsDetecting] = useState(false);
  const [moistureStatus, setMoistureStatus] = useState('No Water Detected!');
  const [lastUpdated, setLastUpdated] = useState(null);
  const [readings, setReadings] = useState([]);

  useEffect(() => {
    let interval;
    if (isDetecting) {
      // Simulate sensor readings every 5 seconds (matching Python code's timing)
      interval = setInterval(() => {
        const reading = Math.random() > 0.5; // Simulate random moisture detection
        const currentTime = new Date();
        
        // Update current status
        const status = reading ? "Water Detected!" : "No Water Detected!";
        setMoistureStatus(status);
        setLastUpdated(currentTime);
        
        // Add to readings history (simulating Firebase storage)
        setReadings(prev => [
          {
            date: currentTime,
            water_detected: status
          },
          ...prev.slice(0, 4) // Keep last 5 readings
        ]);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isDetecting]);

  const toggleDetection = () => {
    setIsDetecting(!isDetecting);
    if (!isDetecting) {
      setMoistureStatus('Starting detection...');
    } else {
      setMoistureStatus('Detection stopped');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Soil Moisture Detection</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">What is Soil Moisture?</h2>
          <p className="mb-4">
            Soil moisture refers to the water content present in the soil. It's a crucial factor in agriculture as it
            directly affects plant growth, nutrient availability, and overall crop health. Proper soil moisture levels
            ensure that plants can absorb water and nutrients efficiently, leading to better yields and crop quality.
          </p>
          
          <Card className="mb-4">
            <CardContent className="p-4">
              <div className="relative w-full h-48 bg-gray-100 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <Droplets 
                    className={`mb-2 ${moistureStatus.includes('Water Detected') ? 'text-blue-500' : 'text-gray-400'}`} 
                    size={48}
                  />
                  <p className={`text-lg font-semibold ${
                    moistureStatus.includes('Water Detected') ? 'text-blue-500' : 'text-gray-500'
                  }`}>
                    {moistureStatus}
                  </p>
                  {isDetecting && (
                    <p className="text-sm text-gray-500 mt-2">
                      Last updated: {lastUpdated?.toLocaleTimeString()}
                    </p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Button 
            onClick={toggleDetection}
            className={isDetecting ? "bg-red-500 hover:bg-red-600" : ""}
          >
            {isDetecting ? "Stop Detection" : "Start Soil Moisture Detection"}
          </Button>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Recent Readings</h2>
          <Card>
            <CardContent className="p-4">
              {readings.length > 0 ? (
                <div className="space-y-4">
                  {readings.map((reading, index) => (
                    <div key={index} className="flex items-center justify-between border-b pb-2">
                      <div className="flex items-center">
                        <Droplets 
                          className={reading.water_detected.includes('Water Detected') ? 'text-blue-500' : 'text-gray-400'} 
                          size={20}
                        />
                        <span className="ml-2">{reading.water_detected}</span>
                      </div>
                      <span className="text-sm text-gray-500">
                        {reading.date.toLocaleTimeString()}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center text-gray-500 py-4">
                  No readings available. Start detection to see data.
                </div>
              )}
            </CardContent>
          </Card>

          <div className="mt-6">
            <h2 className="text-2xl font-semibold mb-4">Why is Soil Moisture Important?</h2>
            <ul className="list-disc list-inside mb-4">
              <li>Optimal plant growth and development</li>
              <li>Efficient nutrient uptake by plants</li>
              <li>Prevention of water stress and drought conditions</li>
              <li>Reduction of water waste through precise irrigation</li>
              <li>Early detection of potential crop issues</li>
              <li>Improved crop yield and quality</li>
            </ul>
          </div>
        </div>
      </div>

      <Link href="/features">
        <Button variant="outline">Back to Features</Button>
      </Link>
    </div>
  );
};

export default SoilMoistureDetection;

