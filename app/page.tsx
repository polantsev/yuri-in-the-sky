import { Suspense } from 'react';
import Footer from 'components/layout/footer';
import { ThreeItemGrid } from 'components/grid/three-items';

export const runtime = 'edge';

export default function Home() {
  return (
    <>
      <ThreeItemGrid />
      <Suspense>
        <Footer />
      </Suspense>
    </>
  );
}
