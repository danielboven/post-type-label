=== Post Type Label ===
Contributors:      danielboven
Tags:              block, gutenberg, post type, query loop, block editor, template parts
Requires at least: 6.7
Tested up to:      6.7
Stable tag:        1.0.0
License:           GPL-2.0-or-later
License URI:       https://www.gnu.org/licenses/gpl-2.0.html

A simple block that displays the post type (e.g. "Page", "Post") anywhere in the Block Editor, including inside Query Loop templates, Single templates, or normal posts/pages.
You can also customise the display label for the Page or Post type.

== Description ==

**Post Type Label** is a lightweight Gutenberg block that displays the post type of the current post or template context.
Useful when building templates, archives, or custom layouts in the Site Editor.

You can place it:

- Inside a **Query Loop** (shows each item's type)
- Inside **single post or page templates**
- Directly inside **normal posts or pages**
- Inside template parts (e.g. headers, lists, reusable blocks)

### Features

- Automatically displays the current post type (e.g. "Post", "Page")
- Optional custom labels for posts and pages
- Works with all themes using the block editor
- Fully stylable via Global Styles / theme.json
- Supports color, typography, spacing, and margin controls
- Server-side rendering for reliable frontend output
- Lightweight — no custom post queries, no bloat

### Why would I use this?

Designing a theme or template and want to show what type of content is being viewed?
Building query loops that mix posts, pages, or custom post types?
Need a small label as a badge or meta element?

This block solves that in one click.

== Installation ==

1. Upload the plugin files to `/wp-content/plugins/post-type-label`, or install the plugin through the WordPress Plugins screen.
2. Activate the plugin through the “Plugins” menu in WordPress.
3. Insert the **Post Type Label** block anywhere in the Block Editor.
4. Optional: Customize labels in the block sidebar settings.

== Frequently Asked Questions ==

= Does this work outside a Query Loop? =
Yes. If inserted on a normal post or page, it shows that post's type.

= Does it support custom post types? =
Yes. If no custom label is set, the block falls back to the capitalized post type (e.g. “Product”, “Event”, “Book”).

= Does it support Full Site Editing? =
Yes — works in all block themes and template parts.

= Is this block dynamic? =
Yes. Frontend rendering uses PHP (`render.php`), ensuring consistent output even when cached.

== Changelog ==

= 1.0.0 =
* Initial release.

