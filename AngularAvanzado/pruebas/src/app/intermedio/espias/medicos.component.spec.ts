import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';


describe('MedicosComponent', () => {
    let componente: MedicosComponent;
    const servicio =  new MedicosService({,})

    beforeEach( () => {
        componente = new MedicosComponent(servicio);
    });


    it('Init: Debe cargar los médicos', inject([]) => {

   
    });


});
