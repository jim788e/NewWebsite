import type { APIRoute } from 'astro';

export const prerender = false;

export const GET: APIRoute = async () => {
  const slug = import.meta.env.OPENSEA_COLLECTION_SLUG;
  const apiKey = import.meta.env.OPENSEA_API_KEY;

  if (!slug || !apiKey) {
    return new Response(
      JSON.stringify({ error: 'Configuration missing' }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

  try {
    const res = await fetch(`https://api.opensea.io/api/v2/collections/${slug}/stats`, {
      headers: { 
        'X-API-Key': apiKey, 
        'Accept': 'application/json' 
      },
    });

    if (!res.ok) {
      throw new Error(`OpenSea responded ${res.status}`);
    }

    const data = await res.json();

    return new Response(
      JSON.stringify({
        floorPrice: data.total?.floor_price ?? null,
        floorPriceSymbol: data.total?.floor_price_symbol ?? 'ETH',
        totalVolume: data.total?.volume ?? null,
        numOwners: data.total?.num_owners ?? null,
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
        },
      }
    );
  } catch {
    return new Response(
      JSON.stringify({ error: 'unavailable' }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};
