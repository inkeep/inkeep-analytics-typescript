
import React from "react";

import { InkeepAnalyticsCore } from "../core.js";

const InkeepAnalyticsContext = React.createContext<InkeepAnalyticsCore | null>(null);

export function InkeepAnalyticsProvider(props: { client: InkeepAnalyticsCore, children: React.ReactNode }): React.ReactNode { 
  return (
    <InkeepAnalyticsContext.Provider value={props.client}>
      {props.children}
    </InkeepAnalyticsContext.Provider>
  );
}

export function useInkeepAnalyticsContext(): InkeepAnalyticsCore { 
  const value = React.useContext(InkeepAnalyticsContext);
  if (value === null) {
    throw new Error("SDK not initialized. Create an instance of InkeepAnalyticsCore and pass it to <InkeepAnalyticsProvider />.");
  }
  return value;
}
