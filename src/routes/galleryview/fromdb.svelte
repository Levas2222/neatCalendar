<script context="module">
    export async function load({fetch}){
        const res= await fetch(
            //"link"

        );
        const data =await res.json();
        console.log(data);
        if (res.ok){

            return 0;


        }

    }
    </script>


