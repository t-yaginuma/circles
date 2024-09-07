import { CsCircleCard } from "@/components/circles/CsCircleCard";
import { CsHeading } from "@/components/circles/CsHeading";
import { CsMain } from "@/components/layouts/CsMain";
import { CsRow } from "@/components/layouts/CsRow";
import { Suspense } from "react";
import { getCircles } from "@/actions/circles";
import { CsButtonEstablishCircle } from "@/components/circles/CsButtonEstablishCircle";

export default async function Circles() {
  const circles = await getCircles();

  return (
    <CsMain>
      <CsHeading heading="Circles" />
      <div>
        {circles && circles.length ? (
          <CsRow gap="lg">
            {circles.map((circle) => {
              return (
                <>
                  {circle.name && (
                    <>
                      <Suspense
                        key={circle.id}
                        fallback={<div>Loading...</div>}
                      >
                        <CsCircleCard
                          name={circle.name}
                          href={`/${circle.name}`}
                          image={circle.image}
                          description={circle.description}
                        />
                      </Suspense>
                    </>
                  )}
                </>
              );
            })}
          </CsRow>
        ) : (
          <p>no circles</p>
        )}
      </div>

      <CsButtonEstablishCircle />
    </CsMain>
  );
}
