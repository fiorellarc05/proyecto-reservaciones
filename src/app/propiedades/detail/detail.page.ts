import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { propiedadesService } from "../propiedades.service";
import { properties } from "../propiedades.model";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.page.html",
  styleUrls: ["./detail.page.scss"],
})
export class DetailPage implements OnInit {
  properties: properties;
  id_prop: number;

  constructor(
    private activeRouter: ActivatedRoute,
    private propiedadesService: propiedadesService,
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.activeRouter.paramMap.subscribe((paramMap) => {
      if (!paramMap.has("propiedadId")) {
        return;
      }
      const propiedadId = parseInt(paramMap.get("propiedadId"));
      this.properties = this.propiedadesService.getPropiedad(propiedadId);
      this.id_prop = propiedadId;
    });
  }
  deletePropiedad() {
    this.alertController
      .create({
        header: "Borrar Propiedad",
        message: "¿Está seguro que desea borrar esta propiedad?",
        buttons: [
          {
            text: "No",
            role: "no",
          },
          {
            text: "Borrar",
            handler: () => {
              this.propiedadesService.deletePropiedad(this.properties.id_prop);
              this.router.navigate(["./propiedades"]);
            },
          },
        ],
      })
      .then((alertEl) => {
        alertEl.present();
      });
  }

}
