import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { isSnap } from "../utils/isSnap";

export default function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    const isSnap = typeof navigator !== "undefined" && navigator.userAgent.includes('ReactSnap');
    if (isSnap) return; // 🚨 IMPORTANT: stop everything during prerender

    const trackPageView = async () => {
      try {
        let visitorId = localStorage.getItem('visitor_id');

        if (!visitorId) {
          visitorId = crypto.randomUUID();
          localStorage.setItem('visitor_id', visitorId);
        }

        // Get visitor location from IP
        const geoResponse = await fetch('https://ipapi.co/json/');
        const geo = await geoResponse.json();

        const { data, error } = await supabase
          .from('page_views')
          .insert({
            page_url: location.pathname,
            visitor_id: visitorId,
            user_agent: navigator.userAgent,
            city: geo.city,
            region: geo.region,
            country: geo.country_name,
            ip: geo.ip,
          });

        if (error) {
          console.error('Supabase Insert Error:', error);
        } else {
          console.log('Page view tracked:', data);
        }
      } catch (err) {
        console.error('Analytics tracking failed:', err);
      }
    };

    trackPageView();
  }, [location.pathname]);

  return null;
}