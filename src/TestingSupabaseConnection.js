import React, { Component } from "react";
import { supabase } from './lib/supabase';



class SupabaseDatabase extends Component {
    async componentDidMount() {
        try {
        const { data, error } = await supabase
            .from('page_views')
            .select('*')
            .limit(1);

        console.log('Data:', data);
        console.log('Error:', error);
        } catch (err) {
        console.error('Connection Error:', err);
        }
    }

    render() {
        return (
        <div>
            Testing Supabase
        </div>
        );
    }

}

export default SupabaseDatabase