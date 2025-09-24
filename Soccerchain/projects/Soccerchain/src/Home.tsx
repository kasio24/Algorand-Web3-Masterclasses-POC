// src/components/Home.tsx
import React, { useState } from 'react'
import { useWallet } from '@txnlab/use-wallet-react'
import ConnectWallet from './components/ConnectWallet'
import Transact from './components/Transact'

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const [openWalletModal, setOpenWalletModal] = useState<boolean>(false)
  const [openDemoModal, setOpenDemoModal] = useState<boolean>(false)
  const { activeAddress } = useWallet()

  const toggleWalletModal = () => setOpenWalletModal(!openWalletModal)
  const toggleDemoModal = () => setOpenDemoModal(!openDemoModal)

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* HERO */}
      <header className="relative">
        <div
          className="relative isolate overflow-hidden bg-gray-900"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2400&auto=format&fit=crop')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          aria-label="Fondo de estadio"
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
            <div className="max-w-2xl">
              <span className="inline-flex items-center rounded-full bg-emerald-500/20 px-3 py-1 text-[11px] font-semibold text-emerald-300 ring-1 ring-inset ring-emerald-400/30">
                Web3 x Deporte • Algorand ASA
              </span>
              <h1 className="mt-3 text-3xl sm:text-5xl font-extrabold leading-tight text-white">
                SoccerChain — Tokeniza el talento ⚽
              </h1>
              <p className="mt-4 text-base sm:text-lg text-gray-200">
                Fracciona y gestiona <span className="font-semibold">activos digitales (ASA)</span> de jugadores.
                Transparencia on-chain, propiedad fraccional y liquidez global.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button
                  data-test-id="connect-wallet"
                  onClick={toggleWalletModal}
                  className="inline-flex w-full xs:w-auto items-center justify-center rounded-xl bg-emerald-500 px-5 py-3 text-white font-semibold shadow-sm hover:bg-emerald-600 transition"
                >
                  Conectar Billetera
                </button>

                {activeAddress && (
                  <button
                    data-test-id="transactions-demo"
                    onClick={toggleDemoModal}
                    className="inline-flex w-full xs:w-auto items-center justify-center rounded-xl bg-white/10 px-5 py-3 text-white font-semibold ring-1 ring-white/30 hover:bg-white/20 transition"
                  >
                    Demo de Transacciones
                  </button>
                )}
              </div>

              <p className="mt-3 text-[11px] text-gray-300">
                *MVP educativo. Verifica riesgos, regulación y términos antes de invertir.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <article className="rounded-2xl border border-gray-100 p-5 sm:p-6 shadow-sm hover:shadow-md transition">
            <div className="text-2xl" aria-hidden>🧾</div>
            <h3 className="mt-3 text-lg font-semibold">Transparencia On-Chain</h3>
            <p className="mt-2 text-sm text-gray-600">
              Auditoría de emisiones, supply y movimientos en tiempo real sobre Algorand.
            </p>
          </article>

          <article className="rounded-2xl border border-gray-100 p-5 sm:p-6 shadow-sm hover:shadow-md transition">
            <div className="text-2xl" aria-hidden>🧩</div>
            <h3 className="mt-3 text-lg font-semibold">Propiedad Fraccional</h3>
            <p className="mt-2 text-sm text-gray-600">
              Participa con montos bajos: tokens ASA que representan fracciones del activo deportivo.
            </p>
          </article>

          <article className="rounded-2xl border border-gray-100 p-5 sm:p-6 shadow-sm hover:shadow-md transition">
            <div className="text-2xl" aria-hidden>🌍</div>
            <h3 className="mt-3 text-lg font-semibold">Pagos Globales</h3>
            <p className="mt-2 text-sm text-gray-600">
              Costos reducidos, alta velocidad y compatibilidad con el ecosistema Algorand.
            </p>
          </article>
        </div>
      </section>

      {/* PLAYER SPOTLIGHT (Simulado) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-14">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Imagen simulada con etiqueta */}
          <div className="relative overflow-hidden rounded-2xl aspect-[4/3] sm:aspect-[16/10]">
            <img
              src="https://images.unsplash.com/photo-1624891078147-0816a2b42f0f?q=80&w=2000&auto=format&fit=crop"
              alt="Jugador simulado celebrando un gol"
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
            <span className="absolute left-3 top-3 rounded-md bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-gray-900">
              SIMULACIÓN
            </span>
          </div>

          {/* Detalle del activo */}
          <div className="flex flex-col justify-center">
            <span className="text-sm font-semibold text-emerald-600">Jugador destacado</span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold">“Canario” — Delantero</h2>

            <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-xl border border-gray-100 p-3">
                <dt className="text-gray-500">Ticker (ASA)</dt>
                <dd className="font-semibold">CNR</dd>
              </div>
              <div className="rounded-xl border border-gray-100 p-3">
                <dt className="text-gray-500">Supply objetivo</dt>
                <dd className="font-semibold">5,000</dd>
              </div>
              <div className="rounded-xl border border-gray-100 p-3">
                <dt className="text-gray-500">Precio objetivo</dt>
                <dd className="font-semibold">$100 USD</dd>
              </div>
              <div className="rounded-xl border border-gray-100 p-3">
                <dt className="text-gray-500">Estado</dt>
                <dd className="font-semibold">MVP • Testnet</dd>
              </div>
            </dl>

            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li>• Métricas públicas de rendimiento</li>
              <li>• Reglas del token y distribución on-chain</li>
              <li>• Reportes periódicos para holders</li>
            </ul>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button
                onClick={toggleDemoModal}
                className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-5 py-3 text-white font-semibold hover:bg-black transition"
              >
                Comprar tokens (Demo)
              </button>
              <button
                onClick={toggleWalletModal}
                className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-gray-900 font-semibold ring-1 ring-gray-200 hover:bg-gray-50 transition"
              >
                Conectar para invertir
              </button>
            </div>

            {activeAddress && (
              <p className="mt-3 text-xs text-emerald-700 break-all">
                Conectado como <span className="font-mono">{activeAddress}</span>
              </p>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} SoccerChain. MVP educativo para tokenización de deportistas.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
            <span>Algorand • ASA</span>
            <span>Auditoría básica</span>
            <span>Compliance (próx.)</span>
          </div>
        </div>
      </footer>

      {/* Modals (sin cambios de integración) */}
      <ConnectWallet openModal={openWalletModal} closeModal={toggleWalletModal} />
      <Transact openModal={openDemoModal} setModalState={setOpenDemoModal} />
    </div>
  )
}

export default Home

