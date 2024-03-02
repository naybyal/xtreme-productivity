'use client'

import NewTask from "@/components/NewTask";
import RainNoise from "@/components/RainNoise";

export default function Home() {

    return (
          <div className="grid grid-flow-col justify-between">
              <NewTask />
              <RainNoise class="mt-5 space-y-2" />
          </div>
    );
}
