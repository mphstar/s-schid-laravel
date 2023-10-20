<?php

use App\Http\Controllers\Admin\Mapel\PelajaranController;
use App\Http\Controllers\Admin\Surat\SuratController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::prefix('mata-pelajaran')->group(function () {
    Route::get('/', [PelajaranController::class, 'getData']);
    Route::post('/add', [PelajaranController::class, 'addData']);
    Route::post('/update', [PelajaranController::class, 'updateData']);
    Route::post('/delete', [PelajaranController::class, 'deleteData']);
    Route::post('/deleteSelection', [PelajaranController::class, 'deleteSelectionData']);
});

Route::prefix('surat')->group(function () {
    Route::prefix('masuk')->group(function () {
        Route::get('/', [SuratController::class, 'suratMasuk']);
        Route::post('/add', [SuratController::class, 'addSuratMasuk']);
        Route::post('/update', [SuratController::class, 'updateSuratMasuk']);
        Route::post('/delete', [SuratController::class, 'deleteSuratMasuk']);
        Route::post('/deleteSelection', [SuratController::class, 'deleteSelectionSuratMasuk']);
    });
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
