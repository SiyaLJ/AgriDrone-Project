'use client'

import React, { useState } from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, RotateCw } from "lucide-react";

const RealTimeCropMonitoring = () => {
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [currentStatus, setCurrentStatus] = useState('Idle');
  const [isServoActive, setIsServoActive] = useState(false);
  const [servoPosition, setServoPosition] = useState(0);
  const [servoStatus, setServoStatus] = useState('Ready');

  const startMonitoring = () => {
    setIsMonitoring(true);
    setCurrentStatus('Monitoring crops...');
  };

  const stopMonitoring = () => {
    setIsMonitoring(false);
    setCurrentStatus('Idle');
  };

  const activateServo = async () => {
    if (isServoActive) return;
    
    setIsServoActive(true);
    setServoStatus('Moving to 180°');
    setServoPosition(180);
    
    // Simulate 1 second delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setServoStatus('Moving to 0°');
    setServoPosition(0);
    
    // Simulate 1 second delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setServoStatus('Returning to starting position');
    setServoPosition(180);
    
    // Final delay before reset
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setServoStatus('Ready');
    setServoPosition(0);
    setIsServoActive(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Real-time Crop Monitoring</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Crop Monitoring</h2>
          <p className="mb-4">
            Real-time crop monitoring allows farmers to keep a constant eye on their fields,
            providing up-to-the-minute data on crop health, growth patterns, and potential issues.
            This technology enables early detection of problems such as pest infestations,
            nutrient deficiencies, or water stress, allowing for timely interventions.
          </p>
          
          <Card className="mb-4">
            <CardContent className="p-4">
              <div className="mb-4">
                <div className="relative w-full h-48 bg-gray-100 rounded-lg overflow-hidden flex flex-col items-center justify-center">
                  <Camera className="mb-2" size={48} />
                  <p className="text-gray-500">{currentStatus}</p>
                  {isMonitoring && (
                    <div className="mt-4 text-sm text-green-600">
                      Simulated crop analysis in progress...
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          <Button 
            onClick={isMonitoring ? stopMonitoring : startMonitoring}
            className={isMonitoring ? "bg-red-500 hover:bg-red-600" : ""}
          >
            {isMonitoring ? "Stop Monitoring" : "Start Real-time Monitoring"}
          </Button>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Servo Motor Control</h2>
          <p className="mb-4">
            A servo motor is a type of rotary or linear actuator that allows for precise
            control of angular or linear position, velocity, and acceleration. It is a
            closed-loop system that uses feedback to maintain the desired output,
            making it highly accurate and responsive.
          </p>
          
          <Card className="mb-4">
            <CardContent className="p-4">
              <div className="relative w-full h-48 bg-gray-100 rounded-lg overflow-hidden flex flex-col items-center justify-center">
                <RotateCw 
                  className={`mb-2 transform ${isServoActive ? 'animate-spin' : ''}`} 
                  size={48}
                  style={{ 
                    transform: `rotate(${servoPosition}deg)`,
                    transition: 'transform 1s ease-in-out'
                  }}
                />
                <p className="text-gray-500">{servoStatus}</p>
                {isServoActive && (
                  <div className="mt-4 text-sm text-blue-600">
                    Current position: {servoPosition}°
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <Button 
            onClick={activateServo}
            disabled={isServoActive}
            className={isServoActive ? "bg-gray-400" : ""}
          >
            {isServoActive ? "Motor Active..." : "Activate Servo Motor"}
          </Button>
        </div>
      </div>

      <Link href="/features">
        <Button variant="outline">Back to Features</Button>
      </Link>
    </div>
  );
};

export default RealTimeCropMonitoring;

