'use client'

import NewTask from "@/components/NewTask";
import RainNoise from "@/components/RainNoise";

export default function Home() {

    return (
          <>
              <NewTask />
              <RainNoise class="mt-5 space-y-2" />
          </>
    );
}
