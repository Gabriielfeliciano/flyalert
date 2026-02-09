import { useForm, Link } from '@inertiajs/react';

export default function Create() {
  const { data, setData, post, processing, errors } = useForm({
    origin: '',
    destination: '',
    departure_date: '',
    target_price: '',
  });

  function submit(e) {
    e.preventDefault();
    post(route('alerts.store'));
  }

  return (
    <div className="p-6 max-w-xl">
      <h1 className="text-2xl font-bold mb-4">Criar Alerta</h1>

      <form onSubmit={submit} className="space-y-4">
        <div>
          <label>Origem (ex: GRU)</label>
          <input
            className="w-full border rounded p-2"
            value={data.origin}
            onChange={e => setData('origin', e.target.value.toUpperCase())}
          />
          {errors.origin && <p className="text-red-500">{errors.origin}</p>}
        </div>

        <div>
          <label>Destino (ex: JFK)</label>
          <input
            className="w-full border rounded p-2"
            value={data.destination}
            onChange={e => setData('destination', e.target.value.toUpperCase())}
          />
          {errors.destination && <p className="text-red-500">{errors.destination}</p>}
        </div>

        <div>
          <label>Data de Partida</label>
          <input
            type="date"
            className="w-full border rounded p-2"
            value={data.departure_date}
            onChange={e => setData('departure_date', e.target.value)}
          />
          {errors.departure_date && <p className="text-red-500">{errors.departure_date}</p>}
        </div>

        <div>
          <label>Preço Alvo (R$)</label>
          <input
            type="number"
            className="w-full border rounded p-2"
            value={data.target_price}
            onChange={e => setData('target_price', e.target.value)}
          />
          {errors.target_price && <p className="text-red-500">{errors.target_price}</p>}
        </div>

        <div className="flex gap-2">
          <button
            disabled={processing}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Salvar
          </button>

          <Link href={route('alerts.index')} className="px-4 py-2 border rounded">
            Cancelar
          </Link>
        </div>
      </form>
    </div>
  );
}
