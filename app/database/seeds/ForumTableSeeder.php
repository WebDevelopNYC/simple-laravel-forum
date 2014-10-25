<?php

use Illuminate\Database\Seeder;

class ForumTableSeeder extends Seeder {

    /**
     * Run the forum table seeds.
     *
     * @return void
     */
    public function run()
    {
        ForumGroup::create(array(
            'title' => 'General Discussion',
            'author_id' => 1
        ));

        ForumCategory::create(array(
            'title' => 'Test Category',
            'group_id' => 1,
            'author_id' => 1
        ));

        ForumCategory::create(array(
            'title' => 'Test Category 2',
            'group_id' => 1,
            'author_id' => 1
        ));
    }

}
