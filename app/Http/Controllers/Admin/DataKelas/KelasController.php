<?php

namespace App\Http\Controllers\Admin\DataKelas;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class KelasController extends Controller
{
    public function kelas1(){
        return Inertia::render('Admin/DataSiswa/Kelas1', [
            "kelas" => 1
        ]);
    }
    public function kelas2(){
        return Inertia::render('Admin/DataSiswa/Kelas2', [
            "kelas" => 2
        ]);
    }
    public function kelas3(){
        return Inertia::render('Admin/DataSiswa/Kelas3', [
            "kelas" => 3
        ]);
    }
    public function kelas4(){
        return Inertia::render('Admin/DataSiswa/Kelas4', [
            "kelas" => 4
        ]);
    }
    public function kelas5(){
        return Inertia::render('Admin/DataSiswa/Kelas5', [
            "kelas" => 5
        ]);
    }
    public function kelas6(){
        return Inertia::render('Admin/DataSiswa/Kelas6', [
            "kelas" => 6
        ]);
    }
}
