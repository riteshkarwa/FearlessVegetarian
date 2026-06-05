import { useEffect } from 'react';
import { supabase } from '../lib/supabase';

export function usePageTracking() {
  useEffect(() => {
    const trackPageView = async () => {
      try {
        let visitorId = localStorage.getItem('visitor_id');

        if (!visitorId) {
          visitorId = crypto.randomUUID();
          localStorage.setItem('visitor_id', visitorId);
        }

        const { error } = await supabase
          .from('page_views')
          .insert({
            page_url: window.location.pathname,
            visitor_id: visitorId,
            user_agent: navigator.userAgent
          });

        if (error) {
          console.error('Tracking error:', error);
        }
      } catch (err) {
        console.error(err);
      }
    };

    trackPageView();
  }, []);
}