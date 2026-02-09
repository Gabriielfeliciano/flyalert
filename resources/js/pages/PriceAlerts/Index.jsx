import { Link } from '@inertiajs/react';

export default function Index({ alerts }) {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center reveal">
        <h1 className="text-2xl font-bold">Meus Alertas</h1>

        <Link
          href={route('alerts.create')}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Novo Alerta
        </Link>
      </div>

      <div className="mt-6 space-y-4">
        {alerts.length === 0 && (
          <p className="text-gray-500">Nenhum alerta cadastrado.</p>
        )}

        {alerts.map(alert => (
          <div key={alert.id} className="border rounded p-4">
            <strong>{alert.origin} → {alert.destination}</strong>
            <div className="text-sm text-gray-600">
              Data: {alert.departure_date}
            </div>
            <div className="text-sm text-gray-600">
              Preço alvo: R$ {alert.target_price}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
