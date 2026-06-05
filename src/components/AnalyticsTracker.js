import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { supabase } from '../lib/supabase';

export default function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    const trackPageView = async () => {
      let visitorId = localStorage.getItem('visitor_id');

      if (!visitorId) {
        visitorId = crypto.randomUUID();
        localStorage.setItem('visitor_id', visitorId);
      }

      await supabase.from('page_views').insert({
        page_url: location.pathname,
        visitor_id: visitorId,
        user_agent: navigator.userAgent,
      });
    };

    trackPageView();
  }, [location.pathname]);

  return null;
}