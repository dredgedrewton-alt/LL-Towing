import { ImageResponse } from 'next/og';

export const alt = 'LL Towing & Auto Repair - 24/7 Roadside Assistance & Auto Services';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          backgroundColor: '#17191D',
          padding: '60px 80px',
          fontFamily: 'sans-serif',
          color: '#ffffff',
          borderBottom: '16px solid #C62828',
        }}
      >
        {/* Top Tag & Dispatch Notice */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <div
            style={{
              backgroundColor: '#C62828',
              color: '#ffffff',
              padding: '8px 20px',
              borderRadius: '8px',
              fontSize: '18px',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '2px',
            }}
          >
            24/7 Emergency Dispatch
          </div>
          <div
            style={{
              color: '#A3AAB2',
              fontSize: '20px',
              fontWeight: 600,
            }}
          >
            Maryland · Washington DC · Northern Virginia
          </div>
        </div>

        {/* Center Headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div
            style={{
              fontSize: '64px',
              fontWeight: 900,
              letterSpacing: '-1.5px',
              lineHeight: 1.1,
              color: '#ffffff',
            }}
          >
            LL Towing & Auto Repair
          </div>
          <div
            style={{
              fontSize: '28px',
              fontWeight: 500,
              color: '#E2E4E8',
              maxWidth: '900px',
              lineHeight: 1.4,
            }}
          >
            Professional towing, flatbed recovery, roadside assistance, and automotive repair serving Beltsville, Laurel, and the Greater Capital Region.
          </div>
        </div>

        {/* Bottom Phone & Dispatch Strip */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            paddingTop: '32px',
            borderTop: '2px solid #2B303A',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <div
              style={{
                fontSize: '20px',
                color: '#A3AAB2',
                fontWeight: 600,
              }}
            >
              Direct Live Operator:
            </div>
            <div
              style={{
                fontSize: '36px',
                fontWeight: 900,
                color: '#EF5350',
                letterSpacing: '-0.5px',
              }}
            >
              (240) 424-8226
            </div>
          </div>

          <div
            style={{
              fontSize: '20px',
              color: '#737B85',
              fontWeight: 600,
            }}
          >
            Beltsville & Laurel Operating Hubs
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
