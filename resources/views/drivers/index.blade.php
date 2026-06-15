@extends('layouts.app')

@section('title', 'Monitoramento de Entregas')

@section('content')
<div>

<div class="d-flex flex-column gap-4 py-4 px-4">
    <h2>Motoristas</h2>
    <!-- Bloco de Filtros -->
    <div class="card border-0 shadow-sm">

        <div class="card-body d-grid gap-3">
            <h6>Filtros</h6>

            <form id="driversFiltersForm">
                <div class="row align-items-end">
                    <div class="col-md-3">
                        <label for="date_period" class="form-label">
                            Data <span class="text-muted">(Período)</span>
                        </label>

                        <input
                            type="text"
                            id="date_period"
                            name="date_period"
                            class="form-control form-control"
                            placeholder="filtrar por período">
                    </div>

                    <div class="col-md-3">
                        <label for="status" class="form-label">
                            Status
                        </label>

                        <select
                            id="status"
                            name="status"
                            class="form-select form-select">
                            <option value="">Selecionar status...</option>
                            <option value="completed">Concluído</option>
                            <option value="almost_done">Próximo de terminar</option>
                            <option value="alert">Em alerta</option>
                            <option value="all">Todos</option>
                        </select>
                    </div>
                </div>
            </form>
        </div>
    </div>

    <!-- Bloco da Tabela -->
    <div class="card border-0 shadow-sm">
        <div class="card-body">

            <!-- Topo da tabela -->
            <div class="d-flex justify-content-between align-items-center mb-3">
                <div class="d-flex align-items-center gap-2">
                    <span class="text-muted" id="driversPaginationInfo">
                        0-0 de 0
                    </span>

                    <select
                        id="perPage"
                        class="form-select form-select"
                        style="width: 70px;">
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                    </select>
                </div>

                <nav aria-label="Paginação">
                    <ul class="pagination custom-pagination justify-content-center mb-0" id="driversPagination">

                    </ul>
                </nav>

                <button type="button" class="btn btn-primary btn-md" id="refreshDriversButton">
                    Atualizar
                </button>
            </div>
            <!-- Tabela -->
            <div class="table-responsive">
                <table class="table table-striped table-hover ">
                    <thead>
                        <tr class="border-top  border-light-3 text-primary">
                            <th scope="col">Nome do Motorista</th>
                            <th scope="col">Pedidos</th>
                            <th scope="col">Entregas</th>
                        </tr>
                    </thead>

                    <tbody id="driversTableBody">
                        <tr>
                            <td colspan="3" class="text-muted text-center">
                                Carregando...
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    </div>
</div>
</div>

@include('drivers.partials.orders-modal')
@endsection

@section('scripts')
<script src="{{ mix('assets/js/drivers/drivers-list.js') }}"></script>
@endsection
