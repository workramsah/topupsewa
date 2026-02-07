"use client";

import React, { useEffect, useState } from "react";

interface Order {
  id: number;
  names: string;
  playerid: string;
  price: string;
  whatsapp: string;
  source?: string;
}

export default function Get() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        setError(null);
        const baseUrl = "";

        const [usersRes, pubgRes, tiktokRes] = await Promise.all([
          fetch(`${baseUrl}/api/users`, { headers: { "Content-Type": "application/json" } }),
          fetch(`${baseUrl}/api/pubg`, { headers: { "Content-Type": "application/json" } }),
          fetch(`${baseUrl}/api/tiktok`, { headers: { "Content-Type": "application/json" } }),
        ]);

        const projectOrders: Order[] = usersRes.ok
          ? (await usersRes.json()).map((u: Record<string, unknown>) => ({
              id: Number(u.id),
              names: String(u.names),
              playerid: String(u.playerid),
              price: String(u.price),
              whatsapp: String(u.whatsapp),
              source: "FreeFire",
            }))
          : [];

        const pubgOrders: Order[] = pubgRes.ok
          ? (await pubgRes.json()).map((e: Record<string, unknown>) => ({
              id: Number(e.id),
              names: String(e.naam),
              playerid: String(e.gamesid),
              price: String(e.rate),
              whatsapp: String(e.message),
              source: "Pubg",
            }))
          : [];

        const tiktokOrders: Order[] = tiktokRes.ok
          ? (await tiktokRes.json()).map((t: Record<string, unknown>) => ({
              id: Number(t.id),
              names: String(t.naam),
              playerid: String(t.videoslink),
              price: String(t.rate),
              whatsapp: String(t.whatsapp),
              source: "Tiktok",
            }))
          : [];

        const combined = [...projectOrders, ...pubgOrders, ...tiktokOrders].sort(
          (a, b) => b.id - a.id
        );
        setOrders(combined);
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : "Failed to load orders");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto p-4">
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-theme-accent mx-auto" />
          <p className="mt-2 text-gray-300">Loading orders...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-4">
        <div className="bg-red-500/20 border border-red-500/50 text-red-200 px-4 py-3 rounded-xl">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-white mb-4">Orders</h1>
      <div className="bg-theme-card border border-theme-bg rounded-2xl overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead className="bg-theme-bg text-gray-200">
            <tr>
              <th className="px-4 py-2 text-left">SN</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Player ID / Link</th>
              <th className="px-4 py-2 text-left">WhatsApp</th>
              <th className="px-4 py-2 text-left">Price</th>
              <th className="px-4 py-2 text-left">Source</th>
            </tr>
          </thead>
          <tbody className="text-white">
            {orders.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-4 py-6 text-center text-gray-400">
                  No orders yet
                </td>
              </tr>
            ) : (
              orders.map((order) => (
                <tr
                  key={`${order.source}-${order.id}`}
                  className="border-t border-theme-bg hover:bg-theme-bg/50"
                >
                  <td className="px-4 py-2">{order.id}</td>
                  <td className="px-4 py-2">{order.names}</td>
                  <td className="px-4 py-2">{order.playerid}</td>
                  <td className="px-4 py-2">{order.whatsapp}</td>
                  <td className="px-4 py-2">{order.price}</td>
                  <td className="px-4 py-2">{order.source ?? "—"}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
