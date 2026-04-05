<!DOCTYPE html>
<html lang="en">
<head>
	<script type="text/javascript">
			</script>
	<meta http-equiv="content-type" content="text/html; charset=utf-8" />
	<title><?php echo htmlspecialchars((isset($seoTitle) && $seoTitle !== "") ? $seoTitle : "Contacts"); ?></title>
	<base href="{{base_url}}" />
	<?php echo isset($sitemapUrls) ? (generateCanonicalUrl($sitemapUrls)."\n") : ""; ?>	
	
						<meta name="viewport" content="width=device-width, initial-scale=1" />
					<meta name="description" content="<?php echo htmlspecialchars((isset($seoDescription) && $seoDescription !== "") ? $seoDescription : "Contacts"); ?>" />
			<meta name="keywords" content="<?php echo htmlspecialchars((isset($seoKeywords) && $seoKeywords !== "") ? $seoKeywords : "Contacts"); ?>" />
			
	<!-- Facebook Open Graph -->
		<meta property="og:title" content="<?php echo htmlspecialchars((isset($seoTitle) && $seoTitle !== "") ? $seoTitle : "Contacts"); ?>" />
			<meta property="og:description" content="<?php echo htmlspecialchars((isset($seoDescription) && $seoDescription !== "") ? $seoDescription : "Contacts"); ?>" />
			<meta property="og:image" content="<?php echo htmlspecialchars((isset($seoImage) && $seoImage !== "") ? "{{base_url}}".$seoImage : ""); ?>" />
			<meta property="og:type" content="article" />
			<meta property="og:url" content="__wb_curr_url__" />
		<!-- Facebook Open Graph end -->

		<meta name="generator" content="Site.pro Website builder" />
			<script src="js/common-bundle.js?ts=20260401093956" type="text/javascript"></script>
	<script src="js/a188dd98b81a02d21e3ea7b0f8765787-bundle.js?ts=20260401093956" type="text/javascript"></script>
	<link href="css/common-bundle.css?ts=20260401093956" rel="stylesheet" type="text/css" />
	<link href="https://fonts.googleapis.com/css?family=Comfortaa:300,400,500,600,700&amp;subset=cyrillic,cyrillic-ext,greek,latin,latin-ext,vietnamese" rel="stylesheet" type="text/css" />
	<link href="https://fonts.googleapis.com/css?family=Raleway:400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&amp;subset=latin" rel="stylesheet" type="text/css" />
	<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i&amp;subset=cyrillic,cyrillic-ext,greek,greek-ext,latin,latin-ext,vietnamese" rel="stylesheet" type="text/css" />
	<link href="css/a188dd98b81a02d21e3ea7b0f8765787-bundle.css?ts=20260401093956" rel="stylesheet" type="text/css" id="wb-page-stylesheet" />
	<ga-code/>
	<script type="text/javascript">
	window.useTrailingSlashes = true;
	window.disableRightClick = false;
	window.currLang = 'en';
</script>
		
	<!--[if lt IE 9]>
	<script src="js/html5shiv.min.js"></script>
	<![endif]-->

		<script type="text/javascript">
		$(function () {
<?php $wb_form_send_success = popSessionOrGlobalVar("wb_form_send_success"); ?>
<?php if (($wb_form_send_state = popSessionOrGlobalVar("wb_form_send_state"))) { ?>
	<?php if (($wb_form_popup_mode = popSessionOrGlobalVar("wb_form_popup_mode")) && (isset($wbPopupMode) && $wbPopupMode)) { ?>
		if (window !== window.parent && window.parent.postMessage) {
			var data = {
				event: "wb_contact_form_sent",
				data: {
					state: "<?php echo str_replace('"', '\"', $wb_form_send_state); ?>",
					type: "<?php echo $wb_form_send_success ? "success" : "danger"; ?>"
				}
			};
			window.parent.postMessage(data, "<?php echo str_replace('"', '\"', popSessionOrGlobalVar("wb_target_origin")); ?>");
		}
	<?php $wb_form_send_success = false; $wb_form_send_state = null; $wb_form_popup_mode = false; ?>
	<?php } else { ?>
		wb_show_alert("<?php echo str_replace(array('"', "\r", "\n"), array('\"', "", "<br/>"), $wb_form_send_state); ?>", "<?php echo $wb_form_send_success ? "success" : "danger"; ?>");
	<?php } ?>
<?php } ?>
});    </script>
</head>


<body class="site site-lang-en<?php if (isset($wbPopupMode) && $wbPopupMode) echo ' popup-mode'; ?> " <?php ?>><div id="wb_root" class="root wb-layout-vertical"><div class="wb_sbg"></div><div id="wb_header_a188dd98b81a02d21e3ea7b0f8765787" class="wb_element wb-sticky wb-layout-element" data-plugin="LayoutElement" data-h-align="center" data-v-align="top"><div class="wb_content wb-layout-vertical"><div id="a19d435fcfd7003770fd1b78d0846095" class="wb_element wb-layout-element" data-plugin="LayoutElement"><div class="wb_content wb-layout-horizontal"></div></div><div id="a188dd98a2a73512bd09dd8ff1364d2d" class="wb_element wb-layout-element" data-plugin="LayoutElement"><div class="wb_content wb-layout-horizontal"><div id="a188dd98a2a736e01a07523e6d3bb5ed" class="wb_element wb-layout-element" data-plugin="LayoutElement"><div class="wb_content wb-layout-horizontal"><div id="a19d435f25e700c066961741329fcb77" class="wb_element wb_element_picture" data-plugin="Picture" title=""><div class="wb_picture_wrap"><div class="wb-picture-wrapper"><img loading="lazy" alt="" src="gallery_gen/565150f9b0805928eb3c6f259e20650e_78x56_0x0_78x72_crop.png?ts=1775025596"></div></div></div><div id="a19d4360dd4c0064c0969805ad879bc2" class="wb_element wb_element_picture" data-plugin="Picture" title=""><div class="wb_picture_wrap"><div class="wb-picture-wrapper"><img loading="lazy" alt="" src="gallery_gen/cd0df0cce139d68392d3b89ae1695123_492x150_fit.png?ts=1775025596"></div></div></div></div></div><div id="a18b61c2b15b0018388b437dece967d2" class="wb_element wb-layout-element" data-plugin="LayoutElement"><div class="wb_content wb-layout-vertical"><div id="a19d43b78224002b944d6ed137ec8506" class="wb_element wb-menu wb-prevent-layout-click wb-menu-mobile" data-plugin="Menu"><span class="btn btn-default btn-collapser"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></span><?php MenuElement::render((object) array(
	'type' => 'hmenu',
	'dir' => 'ltr',
	'items' => array(
		(object) array(
			'id' => 1,
			'href' => '{{base_url}}',
			'name' => 'Home',
			'class' => '',
			'children' => array()
		),
		(object) array(
			'id' => 2,
			'href' => 'About/',
			'name' => 'About',
			'class' => '',
			'children' => array()
		),
		(object) array(
			'id' => 3,
			'href' => 'Contacts/',
			'name' => 'Contacts',
			'class' => 'wb_this_page_menu_item active',
			'children' => array()
		)
	)
)); ?><div class="clearfix"></div></div></div></div></div></div></div></div><div id="wb_main_a188dd98b81a02d21e3ea7b0f8765787" class="wb_element wb-layout-element" data-plugin="LayoutElement"><div class="wb-layout-bg-element"><div id="a188dd98a2a7039b6b0944231590c6dd" class="wb_element wb_element_shape" data-plugin="Shape"><div class="wb_shp"></div></div></div><div class="wb_content wb-layout-vertical"><div id="a188dd98a2a704d6c9dcb6f98868d371" class="wb_element wb-layout-element" data-plugin="LayoutElement"><div class="wb_content wb-layout-vertical"><div id="a188dd98a2a70529636a20280be1c1f1" class="wb_element wb_text_element" data-plugin="TextArea" style=" line-height: normal;"><h1 class="wb-stl-heading1">Contacts</h1>
</div><div id="a188dd98a2a706b63975807e0c0bc07d" class="wb_element wb_text_element" data-plugin="TextArea" style=" line-height: normal;"><p class="wb-stl-normal" style="text-align: center;">You will find the latest information about us on this page. Our company is constantly evolving and growing. We provide wide range of services. Our mission is to provide best solution that helps everyone. If you want to contact us, please fill the contact form on our...</p>
</div><div id="a188dd98a2a708b7db970fce598c97e1" class="wb_element wb_text_element" data-plugin="TextArea" style=" line-height: normal;"><p class="wb-stl-normal" style="text-align: center;"> </p>

<p class="wb-stl-normal" style="text-align: center;"><strong>Phone:</strong></p>

<p class="wb-stl-normal" style="text-align: center;">+359878171161</p>

<p class="wb-stl-normal" style="text-align: center;"> </p>

<p class="wb-stl-normal" style="text-align: center;"><strong>Email:</strong><br>
<a href="mailto:info@example.com">info@example.com</a></p>
</div></div></div><div id="a188dd98a2a709689b095785f05f2730" class="wb_element wb-layout-element" data-plugin="LayoutElement"><div class="wb_content wb-layout-vertical"></div></div></div></div><div id="wb_footer_a188dd98b81a02d21e3ea7b0f8765787" class="wb_element wb-layout-element" data-plugin="LayoutElement"><div class="wb_content wb-layout-vertical"><div id="a188dd98a2a74be7fa7a0c31eeec7580" class="wb_element wb-layout-element" data-plugin="LayoutElement"><div class="wb_content wb-layout-horizontal"><div id="a188dd98a2a74fece833f12a9a0bc30d" class="wb_element wb-prevent-layout-click" data-plugin="LinkExchangeBadge"><div class="wb-stl-footer">I <i class="icon-wb-logo icon-wb-logo-izyro"></i><a href="https://site.pro/" target="_blank" title="Site.pro Website builder">Site.pro</a></div></div></div></div><div id="wb_footer_c" class="wb_element" data-plugin="WB_Footer" style="text-align: center; width: 100%;"><div class="wb_footer"></div><script type="text/javascript">
			$(function() {
				var footer = $(".wb_footer");
				var html = (footer.html() + "").replace(/^\s+|\s+$/g, "");
				if (!html) {
					footer.parent().remove();
					footer = $("#footer, #footer .wb_cont_inner");
					footer.css({height: ""});
				}
			});
			</script></div></div></div></div>{{hr_out}}</body>
</html>
