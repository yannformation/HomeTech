import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdminModel } from './admin-dashboard.model';
import { ApiService } from 'src/app/service/api.service';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  formValue !:FormGroup;
  adminModelObj: AdminModel = new AdminModel();
  adminData !: any;
  showAdd! : boolean;
  showUpdate! :boolean;

  constructor(public router: Router, public formbuilder: FormBuilder, private api: ApiService){}


  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      prenom: [''],
      nom: [''],
      email: [''],
      mobile: [''],
      position: ['']
    })
    this.getAllAdmin();
  }
  clickAddAdlin(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }
  postAdminDetails(){
    this.adminModelObj.prenom = this.formValue.value.prenom;
    this.adminModelObj.nom = this.formValue.value.nom;
    this.adminModelObj.email = this.formValue.value.email;
    this.adminModelObj.mobile = this.formValue.value.mobile;
    this.adminModelObj.position = this.formValue.value.position;

    this.api.postAdmin(this.adminModelObj)
    .subscribe(res=>{
      console.log(res);
      alert("Création Administrateur réussie !")
      //pour fermer et vider la modale ainsi que récupérer les nouvelles données
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllAdmin();
    },
    err=>{
      alert("Quelque chose s'est mal passé")
    })
  }

  getAllAdmin(){
    this.api.getAdmin(this.adminData)
    .subscribe(res=>{
      this.adminData= res;
    })
  }
  deleteAdmin(row: any){
    this.api.deleteAdmin(row.id)
    .subscribe(res=>{
      console.log(res)
      alert("Suppression réussie")
      this.getAllAdmin();
    })
  }

  onEdit(row: any){
    this.showAdd = false;
    this.showUpdate = true;
    this.adminModelObj.id = row.id;
    this.formValue.controls['prenom'].setValue(row.prenom);
    this.formValue.controls['nom'].setValue(row.nom);
    this.formValue.controls['email'].setValue(row.email);
    this.formValue.controls['mobile'].setValue(row.mobile);
    this.formValue.controls['position'].setValue(row.position);
  }
  updateAdminDetails(){
    this.adminModelObj.prenom = this.formValue.value.prenom;
    this.adminModelObj.nom = this.formValue.value.nom;
    this.adminModelObj.email = this.formValue.value.email;
    this.adminModelObj.mobile = this.formValue.value.mobile;
    this.adminModelObj.position = this.formValue.value.position;

    this.api.updateAdmin(this.adminModelObj, this.adminModelObj.id)
    .subscribe(res=>{
      alert("Modification réussie")
      //pour fermer et vider la modale ainsi que récupérer les nouvelles données
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllAdmin();
    })
  }
}

