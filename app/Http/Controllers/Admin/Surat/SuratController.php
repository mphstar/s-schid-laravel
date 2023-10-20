<?php

namespace App\Http\Controllers\Admin\Surat;

use App\Http\Controllers\Controller;
use App\Models\Surat;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class SuratController extends Controller
{
    public function masuk()
    {
        return Inertia::render('Admin/Surat/Masuk/SuratMasuk', [
            "route" => "surat"
        ]);
    }

    public function suratMasuk(Request $request)
    {
        if ($request->query('search') != '') {
            $data = Surat::where('judul', 'LIKE', '%' . $request->query('search') . '%')->orderBy('created_at', 'desc')->paginate(6);
        } else if ($request->query('filter') != '') {
            $dataa = json_decode(base64_decode($request->filter));
            $date_awal = $dataa->awal;
            $date_akhir = $dataa->akhir;

            $data = Surat::whereBetween(DB::raw('DATE(created_at)'), [$date_awal, $date_akhir])->orderBy('created_at', 'desc')->paginate(6);
        } else {
            $data = Surat::orderBy('created_at', 'desc')->paginate(6);
        }
        return Response()->json(
            array(
                "status" => "Success",
                "messages" => "Berhasil mendapatkan data",
                "data" => $data,
                "tanggal" => Carbon::now()
            ),
            200
        );
    }

    public function addSuratMasuk(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "judul" => 'required',
            "pengirim" => 'required',
        ]);

        if ($validator->fails()) {
            return Response()->json(array(
                "status" => "gagal",
                "messages" => $validator->errors()->first()
            ), 200);
        }

        $surat = Surat::create([
            "judul" => $request->judul,
            "kategori" => "masuk",
            "tujuan_atau_pengirim" => $request->pengirim
        ]);


        return Response()->json(array(
            "status" => "berhasil",
            "messages" => "Berhasil menambahkan data",
            "data" => $request->all()
        ), 200);
    }

    public function updateSuratMasuk(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "id" => 'required',
            "judul" => 'required',
            "pengirim" => 'required',
        ]);

        if ($validator->fails()) {
            return Response()->json(array(
                "status" => "gagal",
                "messages" => $validator->errors()->first()
            ), 200);
        }

        $surat = Surat::where('id', $request->id)->update([
            "judul" => $request->judul,
            "kategori" => "masuk",
            "tujuan_atau_pengirim" => $request->pengirim
        ]);


        return Response()->json(array(
            "status" => "berhasil",
            "messages" => "Berhasil mengubah data",
            "data" => $request->all()
        ), 200);
    }

    public function deleteSuratMasuk(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "id" => 'required',
        ]);

        if ($validator->fails()) {
            return Response()->json(array(
                "status" => "gagal",
                "messages" => $validator->errors()->first()
            ), 200);
        }

        $surat = Surat::where('id', $request->id)->delete();


        return Response()->json(array(
            "status" => "berhasil",
            "messages" => "Berhasil menghapus data",
            "data" => $request->all()
        ), 200);
    }

    public function deleteSelectionSuratMasuk(Request $request)
    {

        $validator = Validator::make($request->all(), [
            "id" => 'required',
        ]);

        if ($validator->fails()) {
            return Response()->json(array(
                "status" => "gagal",
                "messages" => $validator->errors()->first()
            ), 200);
        }

        for ($i = 0; $i < count($request->id); $i++) {
            Surat::where('id', $request->id[$i])->delete();
        }

        return Response()->json(array(
            "status" => "berhasil",
            "messages" => "Berhasil menghapus data",
        ), 200);
    }
}
