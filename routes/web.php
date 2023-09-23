<?php

use App\Http\Controllers\Admin\DataKelas\KelasController;
use App\Http\Controllers\BooksController;
use App\Http\Controllers\PpdbController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::redirect('/', '/admin/data-siswa/kelas1');

Route::prefix('admin')->group(function () {
    Route::prefix('data-siswa')->group(function () {
        Route::prefix('kelas1')->group(function () {
            Route::get('/', [KelasController::class, 'kelas1']);
        });
        Route::prefix('kelas2')->group(function () {
            Route::get('/', [KelasController::class, 'kelas2']);
        });
        Route::prefix('kelas3')->group(function () {
            Route::get('/', [KelasController::class, 'kelas3']);
        });
        Route::prefix('kelas4')->group(function () {
            Route::get('/', [KelasController::class, 'kelas4']);
        });
        Route::prefix('kelas5')->group(function () {
            Route::get('/', [KelasController::class, 'kelas5']);
        });
        Route::prefix('kelas6')->group(function () {
            Route::get('/', [KelasController::class, 'kelas6']);
        });
    });
});

Route::get('/ppdb', [PpdbController::class, 'index']);
