<div class="modal fade" id="driverOrdersModal" tabindex="-1" aria-labelledby="driverOrdersModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl modal-dialog-scrollable">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="driverOrdersModalTitle">Pedidos</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
            </div>

            <div class="modal-body">
                <div class="row align-items-center mb-3">
                    <div class="col d-flex justify-content-start">
                        <div class="d-flex align-items-center gap-2">
                            <span class="text-muted" id="driverOrdersPaginationInfo">0-0 de 0</span>
                            <select id="driverOrdersPerPage" class="form-select form-select" style="width: 70px;">
                                <option value="2">2</option>
                                <option value="10">10</option>
                                <option value="20">20</option>
                                <option value="30">30</option>
                            </select>
                        </div>
                    </div>

                    <div class="col d-flex justify-content-center">
                        <nav aria-label="Paginação de pedidos">
                            <ul class="pagination custom-pagination justify-content-center mb-0" id="driverOrdersPagination"></ul>
                        </nav>
                    </div>

                    <div class="col"></div>
                </div>

                <div class="table-responsive">
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr id="driverOrdersTableHead" class="border-top border-light-3 text-primary">

                            </tr>
                        </thead>
                        <tbody id="driverOrdersTableBody">
                            <tr>
                                <td colspan="4" class="text-muted text-center">
                                    Carregando...
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="modal-footer">

            </div>
        </div>
    </div>
</div>
