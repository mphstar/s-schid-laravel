<?php

namespace App\Http\Controllers\Admin\Mapel;

use App\Http\Controllers\Controller;
use App\Models\DetailPelajaran;
use App\Models\Pelajaran;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class PelajaranController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/MataPelajaran/Mapel', [
            "route" => "mapel"
        ]);
    }

    public function getData(Request $request)
    {
        if ($request->query('search') != '') {
            $data = Pelajaran::with('detail')->where('nama_mapel', 'LIKE', '%' . $request->query('search') . '%')->orderBy('created_at', 'desc')->paginate(6);
        } else {
            $data = Pelajaran::with('detail')->orderBy('created_at', 'desc')->paginate(6);
        }
        return Response()->json(
            array(
                "status" => "Success",
                "messages" => "Berhasil mendapatkan data",
                "data" => $data
            ),
            200
        );
    }

    public function addData(Request $request)
    {

        $validator = Validator::make($request->all(), [
            "mapel" => 'required',
            "singkatan" => 'required',
            "kkm" => 'required',
        ]);

        if ($validator->fails()) {
            return Response()->json(array(
                "status" => "gagal",
                "messages" => $validator->errors()->first()
            ), 200);
        }

        $pelajaran = Pelajaran::create([
            "nama_mapel" => $request->mapel,
            "singkatan" => $request->singkatan,
            "kkm" => $request->kkm
        ]);

        if ($pelajaran) {
            $detail = $request->detail;
            foreach ($detail as $key => $value) {
                DetailPelajaran::create([
                    "mapel_id" => $pelajaran->id,
                    "judul_nilai" => $value['judul_nilai']
                ]);
            }
        }

        return Response()->json(array(
            "status" => "berhasil",
            "messages" => "Berhasil menambahkan data",
            "data" => $request->all()
        ), 200);
    }

    public function updateData(Request $request)
    {

        $validator = Validator::make($request->all(), [
            "id" => 'required',
            "mapel" => 'required',
            "singkatan" => 'required',
            "kkm" => 'required',
        ]);

        if ($validator->fails()) {
            return Response()->json(array(
                "status" => "gagal",
                "messages" => $validator->errors()->first()
            ), 200);
        }

        $pelajaran = Pelajaran::where('id', $request->id)->update([
            "nama_mapel" => $request->mapel,
            "singkatan" => $request->singkatan,
            "kkm" => $request->kkm
        ]);

        DetailPelajaran::where('mapel_id', $request->id)->delete();

        $detail = $request->detail;
        foreach ($detail as $key => $value) {
            DetailPelajaran::create([
                "mapel_id" => $request->id,
                "judul_nilai" => $value['judul_nilai']
            ]);
        }

        return Response()->json(array(
            "status" => "berhasil",
            "messages" => "Berhasil mengubah data",
            "data" => $request->all()
        ), 200);
    }

    public function deleteData(Request $request)
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

        $pelajaran = Pelajaran::where('id', $request->id)->delete();

        return Response()->json(array(
            "status" => "berhasil",
            "messages" => "Berhasil menghapus data",
        ), 200);
    }

    public function deleteSelectionData(Request $request)
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
            Pelajaran::where('id', $request->id[$i])->delete();
        }

        return Response()->json(array(
            "status" => "berhasil",
            "messages" => "Berhasil menghapus data",
        ), 200);
    }
}
