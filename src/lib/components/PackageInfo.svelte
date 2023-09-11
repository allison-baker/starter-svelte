<script>
	export let name;
	export let speed;
	export let version;
	export let website;

	$: href = `https://www.npmjs.com/package/${name}`;
</script>

<p class="m-2">
	The <code>{name}</code> package is {speed} fast. Download version {version} from
	<a {href}>npm</a> and <a href={website}>learn more here</a>
</p>
