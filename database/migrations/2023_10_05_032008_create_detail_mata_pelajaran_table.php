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
        Schema::create('detail_mata_pelajaran', function (Blueprint $table) {
            $table->id();
            $table->foreignId('mapel_id')->constrained()->onUpdate('cascade')->onDelete('cascade')->references('id')->on('mata_pelajaran');
            $table->string('judul_nilai', 50);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('detail_mata_pelajaran');
    }
};
