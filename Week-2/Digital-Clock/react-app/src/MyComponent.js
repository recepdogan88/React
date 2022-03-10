import React  from 'react';
import Clock from 'react-live-clock';

export default function MyComponent () {
    return (
      <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} />
    )
    
}