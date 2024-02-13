<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

//php -S localhost:8000 -t public/

use Firebase\JWT\JWT;


//list cagetory


//owner token (admin)
$router->get('/list_owner', ['middleware' => 'auth',function() {

    $results = app('db')->select("SELECT * FROM PET_OWNER");

    return response()->json($results);

}]);


//dog all (admin)
$router->get('/list_dog', ['middleware' => 'auth',function() {

    $results = app('db')->select("SELECT * FROM PET_DOG");

    return response()->json($results);

}]);


//list dog owner all (owner)
$router->get('/list_doga', ['middleware' => 'auth',function() {

    $user = app('auth')->user();
    $own_id = $user->id;

    $results = app('db')->select("SELECT pet_owner.own_id,
                                         pet_owner.own_fname,
                                         pet_owner.own_lname,
                                         pet_owner.own_phone,
                                         hnd,
                                         pet_name,
                                         pet_weight,
                                         pet_bloodtype,
                                         pet_emerg

                                  FROM pet_owner, pet_dog
                                  WHERE (pet_owner.own_id = pet_dog.own_id)
                                        AND (pet_owner.own_id = ?)",
                                        [$own_id ]);

    return response()->json($results);

}]);


//dog+owner dog 1 only (unlikely to use)
$router->get('/list_dogowner', function() {

    $results = app('db')->select("SELECT hnd,
                                         pet_name,
                                         pet_weight,
                                         pet_bloodtype,
                                         pet_owner.own_id,
                                         pet_owner.own_fname,
                                         pet_owner.own_lname,
                                         pet_owner.own_phone,
                                         pet_emerg
                                  FROM pet_owner, pet_dog
                                  WHERE pet_owner.own_id = pet_dog.hnd");

    return response()->json($results);

});


//only dog id (admin)
$router->get('/list_downer/{ownid}', ['middleware' => 'auth', function($ownid) {

    $results = app('db')->select("SELECT pet_owner.own_id,
                                         pet_owner.own_fname,
                                         pet_owner.own_lname,
                                         pet_owner.own_phone,
                                         hnd,
                                         pet_name,
                                         pet_weight,
                                         pet_bloodtype,
                                         pet_emerg

                                  FROM pet_owner, pet_dog
                                  WHERE (pet_owner.own_id = pet_dog.own_id)
                                        AND (pet_owner.own_id = ?)",
                                        [$ownid]);

    return response()->json($results);

}]);


//only dog name eng (admin)
$router->get('/list_dnowner/{ownname}', ['middleware' => 'auth', function($ownname) {

    $results = app('db')->select("SELECT pet_owner.own_id,
                                         pet_owner.own_fname,
                                         pet_owner.own_lname,
                                         pet_owner.own_phone,
                                         hnd,
                                         pet_name,
                                         pet_weight,
                                         pet_bloodtype,
                                         pet_emerg

                                  FROM pet_owner, pet_dog
                                  WHERE (pet_owner.own_id = pet_dog.own_id)
                                        AND (pet_owner.own_fname = ?)",
                                        [$ownname]);

    return response()->json($results);

}]);


//cat all (admin)
$router->get('/list_cat', ['middleware' => 'auth',function() {

    $results = app('db')->select("SELECT * FROM PET_CAT");

    return response()->json($results);

}]);


//list cat owner all (owner)
$router->get('/list_cata', ['middleware' => 'auth',function() {

    $user = app('auth')->user();
    $own_id = $user->id;

    $results = app('db')->select("SELECT pet_owner.own_id,
                                         pet_owner.own_fname,
                                         pet_owner.own_lname,
                                         pet_owner.own_phone,
                                         hnc,
                                         petc_name,
                                         petc_weight,
                                         petc_emerg

                                  FROM pet_owner, pet_cat
                                  WHERE (pet_owner.own_id = pet_cat.own_id)
                                        AND (pet_owner.own_id = ?)",
                                        [$own_id ]);

    return response()->json($results);

}]);


//only cat id (admin)
$router->get('/list_cowner/{ownid}', ['middleware' => 'auth',function($ownid) {

    $results = app('db')->select("SELECT pet_owner.own_id,
                                         pet_owner.own_fname,
                                         pet_owner.own_lname,
                                         pet_owner.own_phone,
                                         hnc,
                                         petc_name,
                                         petc_weight,
                                         petc_emerg

                                  FROM pet_owner, pet_cat
                                  WHERE (pet_owner.own_id = pet_cat.own_id)
                                        AND (pet_owner.own_id = ?)",
                                        [$ownid]);

    return response()->json($results);

}]);


//only cat name eng (admin)
$router->get('/list_cnowner/{ownname}', ['middleware' => 'auth', function($ownname) {

    $results = app('db')->select("SELECT pet_owner.own_id,
                                         pet_owner.own_fname,
                                         pet_owner.own_lname,
                                         pet_owner.own_phone,
                                         hnc,
                                         petc_name,
                                         petc_weight,
                                         petc_emerg

                                  FROM pet_owner, pet_cat
                                  WHERE (pet_owner.own_id = pet_cat.own_id)
                                        AND (pet_owner.own_fname = ?)",
                                        [$ownname]);

    return response()->json($results);

}]);


//apm dog (admin)
$router->get('/listapm_dogall', ['middleware' => 'auth',function() {

    $results = app('db')->select("SELECT * FROM appointment_dog");

    return response()->json($results);

}]);


//list apm dog all (owner)
$router->get('/listapm_doga', ['middleware' => 'auth',function() {

    $user = app('auth')->user();
    $own_id = $user->id;

    $results = app('db')->select("SELECT apm_id,
                                         pet_owner.own_id,
                                         pet_owner.own_fname,
                                         pet_owner.own_lname,
                                         pet_owner.own_phone,
                                         pet_dog.hnd,
                                         pet_dog.pet_name,
                                         pet_dog.pet_weight,
                                         pet_dog.pet_bloodtype,
                                         pet_dog.pet_emerg,
                                         apm_date,
                                         apm_status

                                  FROM appointment_dog, pet_owner, pet_dog
                                  WHERE (pet_owner.own_id = appointment_dog.own_id)
                                        AND (pet_owner.own_id = ?)
                                        AND (pet_dog.hnd = appointment_dog.hnd)",
                                        [$own_id]);

    return response()->json($results);

}]);


//only apm dog all (admin)
$router->get('/listapm_downer/{ownid}', ['middleware' => 'auth', function($ownid) {

    $results = app('db')->select("SELECT apm_id,
                                         pet_owner.own_id,
                                         pet_owner.own_fname,
                                         pet_owner.own_lname,
                                         pet_owner.own_phone,
                                         pet_dog.hnd,
                                         pet_dog.pet_name,
                                         pet_dog.pet_weight,
                                         pet_dog.pet_bloodtype,
                                         pet_dog.pet_emerg,
                                         apm_date,
                                         apm_status

                                  FROM appointment_dog, pet_owner, pet_dog
                                  WHERE (pet_owner.own_id = appointment_dog.own_id)
                                        AND (pet_owner.own_id = ?)
                                        AND (pet_dog.hnd = appointment_dog.hnd)",
                                        [$ownid]);

    return response()->json($results);

}]);


//only apm dog name eng (admin)
$router->get('/listapm_dnowner/{ownname}', ['middleware' => 'auth', function($ownname) {

    $results = app('db')->select("SELECT apm_id,
                                         pet_owner.own_id,
                                         pet_owner.own_fname,
                                         pet_owner.own_lname,
                                         pet_owner.own_phone,
                                         pet_dog.hnd,
                                         pet_dog.pet_name,
                                         pet_dog.pet_weight,
                                         pet_dog.pet_bloodtype,
                                         pet_dog.pet_emerg,
                                         apm_date,
                                         apm_status

                                  FROM appointment_dog, pet_owner, pet_dog
                                  WHERE (pet_owner.own_id = appointment_dog.own_id)
                                        AND (pet_owner.own_fname = ?)
                                        AND (pet_dog.hnd = appointment_dog.hnd)",
                                        [$ownname]);

    return response()->json($results);

}]);

//////

//apm cat (admin)
$router->get('/listapm_catall', ['middleware' => 'auth',function() {

    $results = app('db')->select("SELECT * FROM appointment_cat");

    return response()->json($results);

}]);


//list apm cat all (owner)
$router->get('/listapm_cata', ['middleware' => 'auth',function() {

    $user = app('auth')->user();
    $own_id = $user->id;

    $results = app('db')->select("SELECT apmc_id,
                                         pet_owner.own_id,
                                         pet_owner.own_fname,
                                         pet_owner.own_lname,
                                         pet_owner.own_phone,
                                         pet_cat.hnc,
                                         pet_cat.petc_name,
                                         pet_cat.petc_weight,
                                         pet_cat.petc_emerg,
                                         apmc_date,
                                         apmc_status

                                  FROM appointment_cat, pet_owner, pet_cat
                                  WHERE (pet_owner.own_id = appointment_cat.own_id)
                                        AND (pet_owner.own_id = ?)
                                        AND (pet_cat.hnc = appointment_cat.hnc)",
                                        [$own_id]);

    return response()->json($results);

}]);

//only apm cat all (admin)
$router->get('/listapm_cowner/{ownid}', ['middleware' => 'auth', function($ownid) {

    $results = app('db')->select("SELECT apmc_id,
                                         pet_owner.own_id,
                                         pet_owner.own_fname,
                                         pet_owner.own_lname,
                                         pet_owner.own_phone,
                                         pet_cat.hnc,
                                         pet_cat.petc_name,
                                         pet_cat.petc_weight,
                                         pet_cat.petc_emerg,
                                         apmc_date,
                                         apmc_status

                                  FROM appointment_cat, pet_owner, pet_cat
                                  WHERE (pet_owner.own_id = appointment_cat.own_id)
                                        AND (pet_owner.own_id = ?)
                                        AND (pet_cat.hnc = appointment_cat.hnc)",
                                        [$ownid]);

    return response()->json($results);

}]);


//only apm cat name eng (admin)
$router->get('/listapm_cnowner/{ownname}', ['middleware' => 'auth', function($ownname) {

    $results = app('db')->select("SELECT apmc_id,
                                         pet_owner.own_id,
                                         pet_owner.own_fname,
                                         pet_owner.own_lname,
                                         pet_owner.own_phone,
                                         pet_cat.hnc,
                                         pet_cat.petc_name,
                                         pet_cat.petc_weight,
                                         pet_cat.petc_emerg,
                                         apmc_date,
                                         apmc_status

                                  FROM appointment_cat, pet_owner, pet_cat
                                  WHERE (pet_owner.own_id = appointment_cat.own_id)
                                        AND (pet_owner.own_fname = ?)
                                        AND (pet_cat.hnc = appointment_cat.hnc)",
                                        [$ownname]);

    return response()->json($results);

}]);

/*
//owner listpet
$router->get('/listall_owner', function() {

    $results = app('db')->select("SELECT RegID,
                                         pet_owner.own_id,
                                         pet_owner.own_fname,
                                         pet_owner.own_lname,
                                         pet_owner.own_phone,
                                         pet_dog.hnd,
                                         pet_dog.pet_name,
                                         pet_dog.pet_weight,
                                         pet_dog.pet_bloodtype,
                                         pet_dog.pet_emerg,
                                         pet_cat.hnc,
                                         pet_cat.petc_name,
                                         pet_cat.petc_weight,
                                         pet_cat.petc_emerg

                                  FROM pet_dog, pet_cat, pet_owner, register
                                  WHERE (pet_owner.own_id = register.own_id)
                                  AND (pet_cat.hnc = register.hnc)
                                  AND (pet_dog.hnd = register.hnd)");
                                        
    return response()->json($results);

});*/


///////////////////////////////////////////////////////////////////////////


//register category


//owner
$router->post('/add_owner', function(Illuminate\Http\Request $request) {

    $own_title = $request->input("own_title");
    $own_fname = $request->input("own_fname");
    $own_lname = $request->input("own_lname");
    $own_idcard = $request->input("own_idcard");
    $own_address = $request->input("own_address");
    $own_email = $request->input("own_email");
    $own_phone = $request->input("own_phone");
    $own_username = $request->input("own_username");
    $own_password = app('hash')->make($request->input("own_password"));

    $query = app('db')->insert('INSERT into PET_OWNER
                                (own_title, own_fname, own_lname, own_idcard, own_address,
                                own_email, own_phone, own_username, own_password )
                                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
                                [$own_title,
                                 $own_fname,
                                 $own_lname,
                                 $own_idcard,
                                 $own_address,
                                 $own_email,
                                 $own_phone,
                                 $own_username,
                                 $own_password ] );

    return "SUCCESSFULLY COMMENT";

});


//admin
$router->post('/add_admin', function(Illuminate\Http\Request $request) {

    $admin_fname = $request->input("amfirstname");
    $admin_lname = $request->input("amlastname");
    $admin_username = $request->input("amusername");
    $admin_password = app('hash')->make($request->input("ampassword"));

    $query = app('db')->insert('INSERT into PET_ADMIN
                                (admin_fname, admin_lname, admin_username, admin_password, admin_role)
                                VALUES (?, ?, ?, ?, ?)',
                                [$admin_fname,
                                 $admin_lname,
                                 $admin_username,
                                 $admin_password,
                                 0, ] );

    return "SUCCESSFULLY COMMENT";
    
});


//dog
$router->post('/add_dog', ['middleware' => 'auth', function(Illuminate\Http\Request $request) {

    $user = app('auth')->user();
    $own_id = $user->id;
    
    $pet_name = $request->input("nameD");

    $pet_birthday = strtotime($request->input("birthdayD"));
    $pet_birthday = date('Y-m-d', $pet_birthday );

    $pet_sex = $request->input("sexD");
    $pet_weight = $request->input("weightD");
    $pet_vaccine = $request->input("vaccineD");
    $pet_bloodtype = $request->input("bloodtypeD");
    $pet_emerg = $request->input("emergD");

    $query = app('db')->insert('INSERT into PET_DOG
                                (pet_name, own_id, pet_birthday, pet_sex, pet_weight, 
                                pet_vaccine, pet_bloodtype, pet_emerg)
                                VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
                                [ $pet_name,
                                  $own_id,
                                  $pet_birthday,
                                  $pet_sex, 
                                  $pet_weight, 
                                  $pet_vaccine, 
                                  $pet_bloodtype, 
                                  $pet_emerg ] );

    return "SUCCESSFULLY COMMENT";
    
}]);


//cat
$router->post('/add_cat', ['middleware' => 'auth', function(Illuminate\Http\Request $request) {

    $user = app('auth')->user();
    $own_id = $user->id;
    
    $petc_name = $request->input("nameC");

    $petc_birthday = strtotime($request->input("birthdayC"));
    $petc_birthday = date('Y-m-d', $petc_birthday );

    $petc_sex = $request->input("sexC");
    $petc_weight = $request->input("weightC");
    $petc_vaccine = $request->input("vaccineC");
    $petc_emerg = $request->input("emergC");

    $query = app('db')->insert('INSERT into PET_CAT
                                (petc_name, own_id, petc_birthday, petc_sex, petc_weight, 
                                petc_vaccine, petc_emerg)
                                VALUES (?, ?, ?, ?, ?, ?, ?)',
                                [ $petc_name,
                                  $own_id, 
                                  $petc_birthday,
                                  $petc_sex, 
                                  $petc_weight, 
                                  $petc_vaccine, 
                                  $petc_emerg ] );

    return "SUCCESSFULLY COMMENT";
    
}]);


//////////////////////////////////////////////////////////////////////


//appointment cagetory


//dog
$router->post('/apm_dog', ['middleware' => 'auth', function(Illuminate\Http\Request $request) {

    $user = app('auth')->user();
    $own_id = $user->id;

    $hnd = $request->input("HND");

    $apm_date = strtotime($request->input("appointmentD"));
    $apm_date = date('Y-m-d H:i:s', $apm_date );

    $query = app('db')->insert('INSERT into appointment_dog
                                (hnd, own_id, apm_date, apm_status)
                                VALUES (?, ?, ?, ?)',
                                [ $hnd, 
                                  $own_id,
                                  $apm_date,
                                  'wait for imformation' ] );

    return "SUCCESSFULLY COMMENT";
    
}]);


//cat
$router->post('/apm_cat', ['middleware' => 'auth', function(Illuminate\Http\Request $request) {

    $user = app('auth')->user();
    $own_id = $user->id;

    $hnc = $request->input("HNC");

    $apmc_date = strtotime($request->input("appointmentC"));
    $apmc_date = date('Y-m-d H:i:s', $apmc_date );

    $query = app('db')->insert('INSERT into appointment_cat
                                (hnc, own_id, apmc_date, apmc_status)
                                VALUES (?, ?, ?, ?)',
                                [ $hnc,
                                  $own_id,
                                  $apmc_date,
                                  'wait for imformation' ] );

    return "SUCCESSFULLY COMMENT";
    
}]);


////////////////////////////////////////////////////////////////////////


//register update


//owner
$router->put('/update_owner', ['middleware' => 'auth', function(Illuminate\Http\Request $request) {

    $user = app('auth')->user();
    $own_id = $user->id;

    $own_fname = $request->input("fname");
    $own_lname = $request->input("lname");
    $own_address = $request->input("address");
    $own_email = $request->input("email");
    $own_phone = $request->input("phone");
    $own_username = $request->input("username");
    $own_password = $request->input("password");

    $query = app('db')->update('UPDATE PET_OWNER 
                                SET own_fname = ?,
                                    own_lname = ?,
                                    own_address = ?,
                                    own_email = ?,
                                    own_phone = ?,
                                    own_username = ?,
                                    own_password = ?
                                WHERE
                                    own_id = ?',
                                [$own_fname,
                                 $own_lname,
                                 $own_address,
                                 $own_email,
                                 $own_phone,
                                 $own_username,
                                 $own_password,
                                 $own_id ] );

    return "SUCCESSFULLY COMMENT";
    
}]);


//admin
$router->put('/update_admin', ['middleware' => 'auth', function(Illuminate\Http\Request $request) {

    $user = app('auth')->user();
    $admin_id = $user->id;

    $admin_fname = $request->input("amfirstname");
    $admin_lname = $request->input("amlastname");
    $admin_username = $request->input("amusername");
    $admin_password = app('hash')->make($request->input("ampassword"));

    $query = app('db')->update('UPDATE PET_ADMIN
                                SET 
                                    admin_fname = ?,
                                    admin_lname = ?,
                                    admin_username = ?,
                                    admin_password = ?
                                WHERE
                                    admin_id = ?',
                                [$admin_fname,
                                 $admin_lname,
                                 $admin_username,
                                 $admin_password,
                                 $admin_id ] );

    return "SUCCESSFULLY COMMENT";
    
}]);


//dog
$router->put('/update_dog', ['middleware' => 'auth', function(Illuminate\Http\Request $request) {

    $user = app('auth')->user();
    $own_id = $user->id;

    $dog_id = $request->input("dog_id");
    $pet_name = $request->input("nameD");

    $pet_birthday = strtotime($request->input("birthdayD"));
    $pet_birthday = date('Y-m-d', $pet_birthday );

    $pet_weight = $request->input("weightD");
    $pet_vaccine = $request->input("vaccineD");
    $pet_emerg = $request->input("emergD");

    $query = app('db')->update('UPDATE PET_DOG
                                SET pet_name = ?,
                                    pet_birthday = ?,
                                    pet_weight = ?, 
                                    pet_vaccine = ?,
                                    pet_emerg = ?
                                WHERE
                                    hnd = ?',
                                [ $pet_name,
                                  $pet_birthday,
                                  $pet_weight, 
                                  $pet_vaccine, 
                                  $pet_emerg,
                                  $dog_id,
                                  $own_id ] );

    return "SUCCESSFULLY COMMENT";
    
}]);


//cat
$router->put('/update_cat', ['middleware' => 'auth', function(Illuminate\Http\Request $request) {

    $user = app('auth')->user();
    $own_id = $user->id;

    $cat_id = $request->input("cat_id");
    $petc_name = $request->input("nameC");

    $petc_birthday = strtotime($request->input("birthdayC"));
    $petc_birthday = date('Y-m-d', $petc_birthday );

    $petc_weight = $request->input("weightC");
    $petc_vaccine = $request->input("vaccineC");
    $petc_emerg = $request->input("emergC");

    $query = app('db')->update('UPDATE PET_CAT
                                SET petc_name = ?,
                                    petc_birthday = ?,
                                    petc_weight = ?, 
                                    petc_vaccine = ?,
                                    petc_emerg = ?
                                WHERE
                                    hnc = ?',
                                [ $petc_name,
                                  $petc_birthday, 
                                  $petc_weight, 
                                  $petc_vaccine, 
                                  $petc_emerg,
                                  $cat_id,
                                  $own_id ] );

    return "SUCCESSFULLY COMMENT";

}]);


//update apm dog
$router->put('/updateapm_dog', ['middleware' => 'auth', function(Illuminate\Http\Request $request) {

    $user = app('auth')->user();
    $own_id = $user->id;

    $apmid = $request->input("apmid");

    $apm_date = strtotime($request->input("appointmentD"));
    $apm_date = date('Y-m-d H:i:s', $apm_date );

    $query = app('db')->update('UPDATE appointment_dog
                                SET 
                                    apm_date = ?
                                WHERE
                                    apm_id = ?',
                                    [ $apm_date,
                                      $apmid,
                                      $own_id ] );

    return "SUCCESSFULLY COMMENT";
    
}]);


//update apm cat
$router->put('/updateapm_cat', ['middleware' => 'auth', function(Illuminate\Http\Request $request) {

    $user = app('auth')->user();
    $own_id = $user->id;

    $apmcid = $request->input("apmcid");

    $apmc_date = strtotime($request->input("appointmentC"));
    $apmc_date = date('Y-m-d H:i:s', $apmc_date );

    $query = app('db')->update('UPDATE appointment_cat
                                SET 
                                    apmc_date = ?
                                WHERE
                                    apmc_id = ?',
                                    [ $apmc_date,
                                      $apmcid,
                                      $own_id ] );

    return "SUCCESSFULLY COMMENT";
    
}]);


////////////////////////////////////////////////////////////////////////////


//delete cagetory


//owner
$router->delete('/delete_owner', ['middleware' => 'auth', function(Illuminate\Http\Request $request) {

    $own_id = $request->input("own_id");

    $query = app('db')->delete('DELETE FROM PET_OWNER 
                                WHERE
                                    own_id = ?',
                                [ $own_id ] );

    return "SUCCESSFULLY COMMENT";
    
}]);


//dog
$router->delete('/delete_dog', ['middleware' => 'auth', function(Illuminate\Http\Request $request) {

    $dog_id = $request->input("dog_id");

    $query = app('db')->delete('DELETE FROM PET_DOG
                                WHERE
                                    hnd = ?',
                                [ $dog_id ] );

    return "SUCCESSFULLY COMMENT";
    
}]);


//cat
$router->delete('/delete_cat', ['middleware' => 'auth', function(Illuminate\Http\Request $request) {

    $cat_id = $request->input("cat_id");
    
    $query = app('db')->delete('DELETE FROM PET_CAT
                                WHERE
                                    hnc = ?',
                                [ $cat_id ] );

    return "SUCCESSFULLY COMMENT";

}]);


//cancel or delete apm dog
$router->delete('/deleteapm_dog', ['middleware' => 'auth', function(Illuminate\Http\Request $request) {

    $apmid = $request->input("apmid");

    $query = app('db')->delete('DELETE FROM appointment_dog
                                WHERE
                                    apm_id = ?',
                                [ $apmid ] );

    return "SUCCESSFULLY COMMENT";
    
}]);


//cancel or delete apm cat
$router->delete('/deleteapm_cat', ['middleware' => 'auth', function(Illuminate\Http\Request $request) {

    $apmcid = $request->input("apmcid");

    $query = app('db')->delete('DELETE FROM appointment_cat
                                WHERE
                                    apmc_id = ?',
                                [ $apmcid ] );

    return "SUCCESSFULLY COMMENT";
    
}]);




/////////////////////////////////////////////////////////////////////////


//login cagetory


//normal
/*
$router->post('/login_owner', function(Illuminate\Http\Request $request) {

    $own_username = $request->input("username");
    $own_password = $request->input("password");

    $result = app('db')->select('SELECT own_password FROM pet_owner WHERE own_username = ?',
                                [$own_username]);

    $loginResult = new stdClass();

    if(count($result) == 0) {
        $loginResult->status = "Fail";
        $loginResult->reason = "User is not Founded";
    }
    else {
        if (app('hash')->check($own_password, $result[0]->own_password)) {
            $loginResult->status = "Success";
            $loginResult->reason = "Welcome to my world";
            
            return response()->json($loginResult);

        }

        else {
            $loginResult->status = "Fail";
            $loginResult->reason = "Incorrect Password";
            return response()->json($loginResult);
        }
    }

    return response()->json($loginResult);

});*/




//owner
$router->post('/login_owner', function(Illuminate\Http\Request $request) {

    $own_username = $request->input("own_username");
    $own_password = $request->input("own_password");

    $result = app('db')->select('SELECT own_id, own_password FROM pet_owner WHERE own_username = ?',
                                [$own_username]);

    $loginResult = new stdClass();

    if(count($result) == 0) {
        $loginResult->status = "Fail";
        $loginResult->reason = "User is not Founded";
    }

    else {

        if (app('hash')->check($own_password, $result[0]->own_password)) {

            $loginResult->status = "Success";

            $key = getenv('APP_KEY');
            //$env = getenv('APP_KEY');
            $payload = [
                'iss' => "blood_project",
                'sub' => $result[0]->own_id,
                'iat' => time(),
                'exp' => time() + 30 * 60 * 60,
            ];

            $loginResult->token = JWT::encode($payload, $key, 'HS256');    
            //$loginResult->token = JWT::encode($payload, env('APP_KEY'));
            //return JWT::encode($payload, env('APP_KEY'));
            return response()->json($loginResult);

        }

        else {

            $loginResult->status = "Fail";
            $loginResult->reason = "Incorrect Password";

            return response()->json($loginResult);
        }
    }

    return response()->json($loginResult);

});


//admin
$router->post('/login_admin', function(Illuminate\Http\Request $request) {

    $admin_username = $request->input("amusername");
    $admin_password = $request->input("ampassword");

    $result = app('db')->select('SELECT admin_id,admin_password from pet_admin WHERE admin_username=?',
                                [$admin_username]);

    $loginResult = new stdClass();

    if(count($result) == 0) {
        $loginResult->status = "Fail";
        $loginResult->reason = "User is not Founded";
    }
    else {
        if (app('hash')->check($admin_password, $result[0]->admin_password)) {
            $loginResult->status = "Success";

            $key = getenv('APP_KEY');
            $payload = [
                'iss' => "blood_project",
                'sub' => $result[0]->admin_id,
                'iat' => time(),
                'exp' => time() + 30 * 60 * 60,
            ];
             
            $loginResult->token = JWT::encode($payload, $key, 'HS256');  
            //$loginResult->token = JWT::encode($payload, env('APP_KEY'));
            //return JWT::encode($payload, env('APP_KEY'));  
    
        }

        else {
            $loginResult->status = "Fail";
            $loginResult->reason = "Incorrect Password";
            return response()->json($loginResult);
        }
    }

    return response()->json($loginResult);

});


///////////////////////////////////////////////////////////////////////


//admin cagetory


//admin register dog success
$router->put('/admin_success', ['middleware' => 'auth', function(Illuminate\Http\Request $request) {

    $apmid = $request->input("apmid");

    $user = app('auth')->user();
    $admin_id = $user->id;

    $result = app('db')->select("SELECT admin_role FROM pet_admin WHERE admin_id = ?", [$admin_id]);

    if ($result[0]->admin_role == 1) {

        $query = app('db')->insert('UPDATE appointment_dog
                                    SET apm_status = "success"
                                    WHERE
                                        apm_id = ?',
                                        [$apmid]);
                                        
        return "SUCCESSFULLY COMMENT";       
    }

    else {
        return "Unauthorized, only admin is allowed";
    }

}]);


//admin register dog cancel
$router->put('/admin_cancel', ['middleware' => 'auth', function(Illuminate\Http\Request $request) {

    $apmid = $request->input("apmid");

    $user = app('auth')->user();
    $admin_id = $user->id;

    $result = app('db')->select("SELECT admin_role FROM pet_admin WHERE admin_id = ?", [$admin_id]);

    if ($result[0]->admin_role == 1) {

        $query = app('db')->insert('UPDATE appointment_dog
                                    SET apm_status = "cancel"
                                    WHERE
                                        apm_id = ?',
                                        [$apmid]);
                                        
        return "SUCCESSFULLY COMMENT";       
    }

    else {
        return "Unauthorized, only admin is allowed";
    }

}]);


//admin register dog default
$router->put('/admin_default', ['middleware' => 'auth', function(Illuminate\Http\Request $request) {

    $apmid = $request->input("apmid");

    $user = app('auth')->user();
    $admin_id = $user->id;

    $result = app('db')->select("SELECT admin_role FROM pet_admin WHERE admin_id = ?", [$admin_id]);

    if ($result[0]->admin_role == 1) {

        $query = app('db')->insert('UPDATE appointment_dog
                                    SET apm_status = "default"
                                    WHERE
                                        apm_id = ?',
                                        [$apmid]);
                                        
        return "SUCCESSFULLY COMMENT";       
    }

    else {
        return "Unauthorized, only admin is allowed";
    }

}]);


//admin register cat success
$router->put('/adminc_success', ['middleware' => 'auth', function(Illuminate\Http\Request $request) {

    $apmcid = $request->input("apmcid");

    $user = app('auth')->user();
    $admin_id = $user->id;

    $result = app('db')->select("SELECT admin_role FROM pet_admin WHERE admin_id = ?", [$admin_id]);

    if ($result[0]->admin_role == 1) {

        $query = app('db')->insert('UPDATE appointment_cat
                                    SET apmc_status = "success"
                                    WHERE
                                        apmc_id = ?',
                                        [$apmcid]);
                                        
        return "SUCCESSFULLY COMMENT";       
    }

    else {
        return "Unauthorized, only admin is allowed";
    }

}]);


//admin register cat cancel
$router->put('/adminc_cancel', ['middleware' => 'auth', function(Illuminate\Http\Request $request) {

    $apmcid = $request->input("apmcid");

    $user = app('auth')->user();
    $admin_id = $user->id;

    $result = app('db')->select("SELECT admin_role FROM pet_admin WHERE admin_id = ?", [$admin_id]);

    if ($result[0]->admin_role == 1) {

        $query = app('db')->insert('UPDATE appointment_cat
                                    SET apmc_status = "cancel"
                                    WHERE
                                        apmc_id = ?',
                                        [$apmcid]);
                                        
        return "SUCCESSFULLY COMMENT";       
    }

    else {
        return "Unauthorized, only admin is allowed";
    }

}]);


//admin register cat default
$router->put('/adminc_default', ['middleware' => 'auth', function(Illuminate\Http\Request $request) {

    $apmcid = $request->input("apmcid");

    $user = app('auth')->user();
    $admin_id = $user->id;

    $result = app('db')->select("SELECT admin_role FROM pet_admin WHERE admin_id = ?", [$admin_id]);

    if ($result[0]->admin_role == 1) {

        $query = app('db')->insert('UPDATE appointment_cat
                                    SET apmc_status = "default"
                                    WHERE
                                        apmc_id = ?',
                                        [$apmcid]);
                                        
        return "SUCCESSFULLY COMMENT";       
    }

    else {
        return "Unauthorized, only admin is allowed";
    }

}]);
