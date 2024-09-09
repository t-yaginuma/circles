import { CsCircleCard } from "@/components/circles/CsCircleCard";
import { CsHeading } from "@/components/circles/CsHeading";
import { CsMain } from "@/components/layouts/CsMain";
import { CsRow } from "@/components/layouts/CsRow";
import { Suspense } from "react";
import { getCircles } from "@/actions/circles";
import { CsButtonEstablishCircle } from "@/components/circles/CsButtonEstablishCircle";
import { CsRootLayoutInternal } from "@/components/layouts/CsRootLayoutInternal";
import useGetUser from "@/hooks/use-get-user";

export default async function Circles() {
  const circles = await getCircles();
  const { isAuthenticated } = await useGetUser();

  return (
    <CsRootLayoutInternal
      isAuthenticated={isAuthenticated}
      currentPage="circles"
    >
      <CsMain>
        <CsHeading heading="Circles" />
        <div>
          {circles ? (
            circles.length ? (
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
              <p>0 circles found</p>
            )
          ) : (
            <p>no circles</p>
          )}
        </div>

        <CsButtonEstablishCircle isAuthenticated={isAuthenticated} />
      </CsMain>
    </CsRootLayoutInternal>
  );
}
