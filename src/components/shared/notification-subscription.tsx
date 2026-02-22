"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, BellOff, CheckCircle } from "lucide-react";

export function NotificationSubscription() {
  const [permission, setPermission] = useState<NotificationPermission>("default");
  const [isSupported, setIsSupported] = useState(true);

  useEffect(() => {
    // Check if notifications are supported - valid use of effect to sync with browser API
    if (typeof window !== "undefined" && "Notification" in window) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPermission(Notification.permission);
    } else {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsSupported(false);
    }
  }, []);

  const requestPermission = async () => {
    if (!isSupported) return;

    try {
      const result = await Notification.requestPermission();
      setPermission(result);
      
      if (result === "granted") {
        // Show a welcome notification
        new Notification("Welcome to SabPataKaro!", {
          body: "You'll now receive important updates and notifications.",
          icon: "/favicon.ico",
        });
      }
    } catch (error) {
      console.error("Error requesting notification permission:", error);
    }
  };

  if (!isSupported) {
    return (
      <Card className="border-slate-200 bg-slate-50">
        <CardContent className="pt-6 text-center">
          <BellOff className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
          <p className="text-muted-foreground">
            Browser notifications are not supported in your browser.
          </p>
        </CardContent>
      </Card>
    );
  }

  if (permission === "granted") {
    return (
      <Card className="border-green-200 bg-green-50">
        <CardContent className="pt-6 text-center">
          <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-green-800 mb-1">
            Notifications Enabled
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            You&apos;ll receive important updates and alerts.
          </p>
          <Button variant="outline" size="sm" onClick={() => setPermission("denied")}>
            <BellOff className="mr-2 h-4 w-4" />
            Manage in Browser Settings
          </Button>
        </CardContent>
      </Card>
    );
  }

  if (permission === "denied") {
    return (
      <Card className="border-amber-200 bg-amber-50">
        <CardContent className="pt-6 text-center">
          <BellOff className="h-12 w-12 text-amber-600 mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-amber-800 mb-1">
            Notifications Blocked
          </h3>
          <p className="text-sm text-muted-foreground">
            You&apos;ve blocked notifications. Enable them in your browser settings to receive updates.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bell className="h-5 w-5 text-primary" />
          Enable Notifications
        </CardTitle>
        <CardDescription>
          Get instant alerts for important updates, new guides, and deadlines.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button onClick={requestPermission} className="w-full">
          <Bell className="mr-2 h-4 w-4" />
          Enable Browser Notifications
        </Button>
        <p className="text-xs text-muted-foreground mt-3 text-center">
          You can turn off notifications anytime in your browser settings.
        </p>
      </CardContent>
    </Card>
  );
}

// Compact version for sidebar/footer
export function NotificationButton() {
  const [permission, setPermission] = useState<NotificationPermission>("default");
  const [isSupported, setIsSupported] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined" && "Notification" in window) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPermission(Notification.permission);
    } else {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsSupported(false);
    }
  }, []);

  const handleClick = async () => {
    if (!isSupported || permission === "granted") return;
    
    const result = await Notification.requestPermission();
    setPermission(result);
    
    if (result === "granted") {
      new Notification("SabPataKaro", {
        body: "Notifications enabled! You'll receive important updates.",
        icon: "/favicon.ico",
      });
    }
  };

  if (!isSupported || permission === "granted") return null;

  return (
    <Button 
      variant="outline" 
      size="sm" 
      onClick={handleClick}
      className="w-full"
    >
      <Bell className="mr-2 h-4 w-4" />
      Enable Notifications
    </Button>
  );
}
