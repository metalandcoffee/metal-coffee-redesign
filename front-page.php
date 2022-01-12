<?php
/**
 * Front page.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package metalandcoffee
 */

get_header();
?>

	<main id="primary" class="site-main">
		<section class="hero" style="background-image: url(<?php echo esc_url( get_template_directory_uri() ) . '/assets/gradient.png'; ?>)">
			<div class="overlay"></div>
			<div class="content">
				<h2>Metal DJ, Web Developer, Twitch Streamer</h2>
				<img class="webtoon" src="<?php echo esc_url( get_template_directory_uri() ) . '/assets/webtoon.png'; ?>" alt="">
			</div>			
		</section>
	</main><!-- #main -->

<?php
get_sidebar();
get_footer();
