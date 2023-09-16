<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BooksController extends Controller
{
    public function index(){

        return Inertia::render('Home', [
        ]);
    }
}
