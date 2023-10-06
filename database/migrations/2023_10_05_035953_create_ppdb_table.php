<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('ppdb', function (Blueprint $table) {
            $table->id();
            $table->string('nama_lengkap', 50);
            $table->string('nama_panggilan', 20);
            $table->string('nik', 16);
            $table->string('tempat_lahir', 30);
            $table->date('tanggal_lahir');
            $table->enum('jenis_kelamin', ['pria', 'wanita']);
            $table->enum('agama', ['islam', 'kristen', 'hindu', 'budha', 'katolik', 'konghucu']);
            $table->string('anak_ke', 3);
            $table->enum('status_keluarga', ['kandung', 'tiri']);
            $table->string('jumlah_saudara_kandung', 3);
            $table->string('jumlah_saudara_tiri', 3)->nullable();
            $table->string('jumlah_saudara_angkat', 3)->nullable();
            $table->enum('anak_yatim_piatu', ['yatim', 'piatu', 'yatim_piatu'])->nullable();
            $table->text('alamat');
            $table->string('no_telepon', 13);
            $table->string('tempat_tinggal', 30);
            $table->string('jarak_rumah', 3);
            $table->string('waktu_perjalanan', 3);
            $table->string('golongan_darah', 10);
            $table->string('riwayat_penyakit', 50)->nullable();
            $table->string('kelainan_jasmani', 50)->nullable();
            $table->string('tinggi_badan', 3);
            $table->string('berat_badan', 3);
            $table->string('nama_ayah', 50);
            $table->string('tempat_lahir_ayah', 30);
            $table->date('tanggal_lahir_ayah');
            $table->enum('agama_ayah', ['islam', 'kristen', 'hindu', 'budha', 'katolik', 'konghucu']);
            $table->string('pendidikan_ayah', 30);
            $table->string('pekerjaan_ayah', 30);
            $table->integer('penghasilan_ayah');
            $table->text('alamat_ayah');
            $table->string('no_telepon_ayah', 13);
            $table->enum('hidup_meninggal_ayah', ['masih', 'meninggal']);
            $table->string('kewarganegaraan_ayah', 30);

            $table->string('nama_ibu', 50);
            $table->string('tempat_lahir_ibu', 30);
            $table->date('tanggal_lahir_ibu');
            $table->enum('agama_ibu', ['islam', 'kristen', 'hindu', 'budha', 'katolik', 'konghucu']);
            $table->string('pendidikan_ibu', 30);
            $table->string('pekerjaan_ibu', 30);
            $table->integer('penghasilan_ibu');
            $table->text('alamat_ibu');
            $table->string('no_telepon_ibu', 13);
            $table->enum('hidup_meninggal_ibu', ['masih', 'meninggal']);
            $table->string('kewarganegaraan_ibu', 30);

            $table->string('kegemaran1', 30);
            $table->string('kegemaran2', 30);
            $table->string('kegemaran3', 30);

            $table->string('foto_pas');
            $table->string('foto_kartu_keluarga');
            $table->string('foto_ijazah');
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ppdb');
    }
};
