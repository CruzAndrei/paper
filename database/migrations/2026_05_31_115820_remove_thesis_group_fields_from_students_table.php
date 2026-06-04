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
        Schema::disableForeignKeyConstraints();
        Schema::table('tbl_students', function (Blueprint $table) {
                $table->dropForeign(['group_id']);
                $table->dropColumn('group_id');
                $table->dropColumn('is_leader');
                $table->foreignId('section_adviser_id')->after('spec_id')->constrained('tbl_section_advisers')->cascadeOnDelete();
        });
        Schema::enableForeignKeyConstraints();
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {   
        Schema::disableForeignKeyConstraints();

        Schema::table('tbl_students', function (Blueprint $table) {
            $table->dropForeign(['section_adviser_id']);
            $table->dropColumn('section_adviser_id');
            $table->foreignId('group_id')->nullable()->constrained('tbl_thesis_groups')->cascadeOnDelete();
            $table->boolean('is_leader')->default(false);
        });

        Schema::enableForeignKeyConstraints();
    }
};
