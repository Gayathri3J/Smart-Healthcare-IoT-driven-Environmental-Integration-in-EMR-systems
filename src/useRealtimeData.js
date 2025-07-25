// useRealtimeData.js
import { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from "firebase/database";
import { app } from './firebase'; // Ensure you import the initialized app

const useRealtimeData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Get a reference to the database service
    const db = getDatabase(app);
    // Reference the "hms" node in your Realtime Database
    const hmsRef = ref(db, 'hms');

    // Subscribe to changes at the "hms" node
    const unsubscribe = onValue(
      hmsRef,
      (snapshot) => {
        setData(snapshot.val());
        setLoading(false);
      },
      (err) => {
        setError(err);
        setLoading(false);
      }
    );

    // Cleanup the listener on unmount
    return () => unsubscribe();
  }, []);

  return { data, loading, error };
};

export default useRealtimeData;
