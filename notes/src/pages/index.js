import React, { useEffect } from 'react';
import { Redirect } from '@docusaurus/router';

function Index() {
  useEffect(() => {
    window.location.replace('/docs/Carlsbad-Watershed-Management-Area/overview');
  }, []);

  return <Redirect to="/docs/Carlsbad-Watershed-Management-Area/overview" />;
}

export default Index;
