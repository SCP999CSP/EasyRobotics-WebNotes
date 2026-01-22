import{_ as a,c as i,o as n,af as e,ar as l}from"./chunks/framework.Cf416Sfo.js";const o=JSON.parse('{"title":"1.5.1 ROS File System","description":"","frontmatter":{},"headers":[],"relativePath":"Language/ROS1/English/1.5.1 ROS File System.md","filePath":"Language/ROS1/English/1.5.1 ROS File System.md"}'),p={name:"Language/ROS1/English/1.5.1 ROS File System.md"};function t(h,s,k,d,r,c){return n(),i("div",null,[...s[0]||(s[0]=[e('<h1 id="_1-5-1-ros-file-system" tabindex="-1">1.5.1 ROS File System <a class="header-anchor" href="#_1-5-1-ros-file-system" aria-label="Permalink to “1.5.1 ROS File System”">​</a></h1><p>The ROS filesystem level refers to the organization of the ROS source code on the hard disk. Its structure can be roughly represented as shown in the following diagram:<img src="'+l+`" alt="img"></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>WorkSpace --- Custom workspace</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    |--- build: Build space, used to store CMake and catkin cache information, configuration files, and other intermediate files.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    |--- devel: Development space, used to store the generated target files after compilation, including header files, dynamic &amp; static link libraries, executables, etc.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    |--- src: Source code</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        |-- package: Functional package (the basic unit of ROS), containing multiple nodes, libraries, and configuration files. The package name should be in all lowercase letters and can only consist of letters, numbers, and underscores.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            |-- CMakeLists.txt: Configures compilation rules, such as source files, dependencies, target files.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            |-- package.xml: Package information, such as: package name, version, author, dependencies... (In older versions, this was manifest.xml).</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            |-- scripts: Stores Python files.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            |-- src: Stores C++ source files.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            |-- include: Header files.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            |-- msg: Message communication format files.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            |-- srv: Service communication format files.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            |-- action: Action format files.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            |-- launch: Can run multiple nodes at once.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            |-- config: Configuration information.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        |-- CMakeLists.txt: Basic configuration for compilation.</span></span></code></pre></div><p>Some directories and files in the ROS filesystem have already been encountered in previous programming sections, such as the creation of functional packages, writing cpp files under the <code>src</code> directory, writing Python files under the <code>scripts</code> directory, writing launch files under the <code>launch</code> directory, and configuring the <code>package.xml</code> and <code>CMakeLists.txt</code> files. Content in other directories will be introduced later in the tutorial. Currently, we focus on these two configuration files: <code>package.xml</code> and <code>CMakeLists.txt</code>.</p><h4 id="_1-package-xml" tabindex="-1">1. package.xml <a class="header-anchor" href="#_1-package-xml" aria-label="Permalink to “1. package.xml”">​</a></h4><p>This file defines properties about the software package, such as the package name, version number, author, maintainer, and dependencies on other catkin packages. Please note that this concept is similar to the <em>manifest.xml</em> file used in the legacy rosbuild system.</p><div class="language-xml"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;?</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xml</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">?&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- Format: Previously 1, format 2 is recommended --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">package</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  &lt;!-- Package Name --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;demo01_hello_vscode&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  &lt;!-- Version --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;0.0.0&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  &lt;!-- Description --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">description</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;The demo01_hello_vscode package&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">description</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  &lt;!-- One maintainer tag required, multiple allowed, one person per tag --&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  &lt;!-- Example:  --&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  &lt;!-- &lt;maintainer email=&quot;jane.doe@example.com&quot;&gt;Jane Doe&lt;/maintainer&gt; --&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  &lt;!-- Maintainer --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">maintainer</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> email</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xuzuo@todo.todo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;xuzuo&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">maintainer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  &lt;!-- One license tag required, multiple allowed, one license per tag --&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  &lt;!-- Commonly used license strings: --&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  &lt;!--   BSD, MIT, Boost Software License, GPLv2, GPLv3, LGPLv2.1, LGPLv3 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  &lt;!-- License Information, ROS core components default to BSD --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">license</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;TODO&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">license</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  &lt;!-- Url tags are optional, but multiple are allowed, one per tag --&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  &lt;!-- Optional attribute type can be: website, bugtracker, or repository --&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  &lt;!-- Example: --&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  &lt;!-- &lt;url type=&quot;website&quot;&gt;http://wiki.ros.org/demo01_hello_vscode&lt;/url&gt; --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  &lt;!-- Author tags are optional, multiple are allowed, one per tag --&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  &lt;!-- Authors do not have to be maintainers, but could be --&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  &lt;!-- Example: --&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  &lt;!-- &lt;author email=&quot;jane.doe@example.com&quot;&gt;Jane Doe&lt;/author&gt; --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  &lt;!-- The *depend tags are used to specify dependencies --&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  &lt;!-- Dependencies can be catkin packages or system dependencies --&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  &lt;!-- Examples: --&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  &lt;!-- Use depend as a shortcut for packages that are both build and exec dependencies --&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  &lt;!--   &lt;depend&gt;roscpp&lt;/depend&gt; --&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  &lt;!--   Note that this is equivalent to the following: --&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  &lt;!--   &lt;build_depend&gt;roscpp&lt;/build_depend&gt; --&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  &lt;!--   &lt;exec_depend&gt;roscpp&lt;/exec_depend&gt; --&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  &lt;!-- Use build_depend for packages you need at compile time: --&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  &lt;!--   &lt;build_depend&gt;message_generation&lt;/build_depend&gt; --&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  &lt;!-- Use build_export_depend for packages you need in order to build against this package: --&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  &lt;!--   &lt;build_export_depend&gt;message_generation&lt;/build_export_depend&gt; --&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  &lt;!-- Use buildtool_depend for build tool packages: --&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  &lt;!--   &lt;buildtool_depend&gt;catkin&lt;/buildtool_depend&gt; --&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  &lt;!-- Use exec_depend for packages you need at runtime: --&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  &lt;!--   &lt;exec_depend&gt;message_runtime&lt;/exec_depend&gt; --&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  &lt;!-- Use test_depend for packages you need only for testing: --&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  &lt;!--   &lt;test_depend&gt;gtest&lt;/test_depend&gt; --&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  &lt;!-- Use doc_depend for packages you need only for building documentation: --&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  &lt;!--   &lt;doc_depend&gt;doxygen&lt;/doc_depend&gt; --&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  &lt;!-- Build tool dependency, this is mandatory --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">buildtool_depend</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;catkin&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">buildtool_depend</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  &lt;!-- Specifies packages required to build this package --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">build_depend</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;roscpp&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">build_depend</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">build_depend</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;rospy&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">build_depend</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">build_depend</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;std_msgs&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">build_depend</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  &lt;!-- Specifies packages required to build libraries against this package --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">build_export_depend</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;roscpp&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">build_export_depend</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">build_export_depend</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;rospy&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">build_export_depend</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">build_export_depend</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;std_msgs&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">build_export_depend</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  &lt;!-- Packages required to run code in this package --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">exec_depend</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;roscpp&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">exec_depend</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">exec_depend</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;rospy&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">exec_depend</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">exec_depend</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;std_msgs&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">exec_depend</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  &lt;!-- The export tag contains other, unspecified, tags --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    &lt;!-- Other tools can request additional information be placed here --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">package</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h4 id="_2-cmakelists-txt" tabindex="-1">2. CMakeLists.txt <a class="header-anchor" href="#_2-cmakelists-txt" aria-label="Permalink to “2. CMakeLists.txt”">​</a></h4><p>The <strong>CMakeLists.txt</strong> file is the input for the CMake build system and is used to build the software package. Any CMake-compatible package contains one or more CMakeLists.txt files that describe how to build the code and where to install it.</p><div class="language-cmake"><button title="Copy Code" class="copy"></button><span class="lang">cmake</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">cmake_minimum_required</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">VERSION</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 3.0.2) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Required CMake version</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">project</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(demo01_hello_vscode) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Package name, can be referenced as \${PROJECT_NAME}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Compile as C++11, supported in ROS Kinetic and newer</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># add_compile_options(-std=c++11)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Find catkin macros and libraries</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## if COMPONENTS list like find_package(catkin REQUIRED COMPONENTS xyz)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## is used, also find other catkin packages</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Set packages required for building</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">find_package</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(catkin REQUIRED COMPONENTS</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  roscpp</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  rospy</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  std_msgs</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## System dependencies are found with CMake&#39;s conventions</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Add system dependencies by default</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># find_package(Boost REQUIRED COMPONENTS system)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Uncomment this if the package has a setup.py. This macro ensures</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## modules and global scripts declared therein get installed</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## See http://ros.org/doc/api/catkin/html/user_guide/setup_dot_py.html</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Enable Python module support</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># catkin_python_setup()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">################################################</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Declare ROS messages, services and actions ##</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">################################################</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## To declare and build messages, services or actions from within this</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## package, follow these steps:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## * Let MSG_DEP_SET be the set of packages whose message types you use in</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">##   your messages/services/actions (e.g. std_msgs, actionlib_msgs, ...).</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## * In the file package.xml:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">##   * add a build_depend tag for &quot;message_generation&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">##   * add a build_depend and a exec_depend tag for each package in MSG_DEP_SET</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">##   * If MSG_DEP_SET isn&#39;t empty the following dependency has been pulled in</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">##     but can be declared for certainty nonetheless:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">##     * add a exec_depend tag for &quot;message_runtime&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## * In this file (CMakeLists.txt):</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">##   * add &quot;message_generation&quot; and every package in MSG_DEP_SET to</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">##     find_package(catkin REQUIRED COMPONENTS ...)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">##   * add &quot;message_runtime&quot; and every package in MSG_DEP_SET to</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">##     catkin_package(CATKIN_DEPENDS ...)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">##   * uncomment the add_*_files sections below as needed</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">##     and list every .msg/.srv/.action file to be processed</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">##   * uncomment the generate_messages entry below</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">##   * add every package in MSG_DEP_SET to generate_messages(DEPENDENCIES ...)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Generate messages in the &#39;msg&#39; folder</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># add_message_files(</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   FILES</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   Message1.msg</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   Message2.msg</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># )</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Generate services in the &#39;srv&#39; folder</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># add_service_files(</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   FILES</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   Service1.srv</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   Service2.srv</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># )</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Generate actions in the &#39;action&#39; folder</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># add_action_files(</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   FILES</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   Action1.action</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   Action2.action</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># )</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Generate added messages and services with any dependencies listed here</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Dependencies when generating messages and services</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># generate_messages(</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   DEPENDENCIES</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   std_msgs</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># )</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">################################################</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Declare ROS dynamic reconfigure parameters ##</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">################################################</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## To declare and build dynamic reconfigure parameters within this</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## package, follow these steps:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## * In the file package.xml:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">##   * add a build_depend and a exec_depend tag for &quot;dynamic_reconfigure&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## * In this file (CMakeLists.txt):</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">##   * add &quot;dynamic_reconfigure&quot; to</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">##     find_package(catkin REQUIRED COMPONENTS ...)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">##   * uncomment the &quot;generate_dynamic_reconfigure_options&quot; section below</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">##     and list every .cfg file to be processed</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Generate dynamic reconfigure parameters in the &#39;cfg&#39; folder</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># generate_dynamic_reconfigure_options(</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   cfg/DynReconf1.cfg</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   cfg/DynReconf2.cfg</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># )</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">###################################</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## catkin specific configuration ##</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">###################################</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## The catkin_package macro generates cmake config files for your package</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Declare things to be passed to dependent projects</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## INCLUDE_DIRS: uncomment this if your package contains header files</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## LIBRARIES: libraries you create in this project that dependent projects also need</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## CATKIN_DEPENDS: catkin_packages dependent projects also need</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## DEPENDS: system dependencies of this project that dependent projects also need</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Runtime dependencies</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">catkin_package(</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  INCLUDE_DIRS include</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  LIBRARIES demo01_hello_vscode</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  CATKIN_DEPENDS roscpp rospy std_msgs</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  DEPENDS system_lib</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">###########</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Build ##</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">###########</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Specify additional locations of header files</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Your package locations should be listed before other locations</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Add header file paths, current package&#39;s header path comes before others</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">include_directories</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># include</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  \${catkin_INCLUDE_DIRS}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Declare a C++ library</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Declare C++ library</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># add_library(\${PROJECT_NAME}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   src/\${PROJECT_NAME}/demo01_hello_vscode.cpp</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># )</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Add cmake target dependencies of the library</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## as an example, code may need to be generated before libraries</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## either from message generation or dynamic reconfigure</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Add CMake target dependencies for the library</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># add_dependencies(\${PROJECT_NAME} \${\${PROJECT_NAME}_EXPORTED_TARGETS} \${catkin_EXPORTED_TARGETS})</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Declare a C++ executable</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## With catkin_make all packages are built within a single CMake context</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## The recommended prefix ensures that target names across packages don&#39;t collide</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Declare C++ executable</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">add_executable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Hello_VSCode src/Hello_VSCode.cpp)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Rename C++ executable without prefix</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## The above recommended prefix causes long target names, the following renames the</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## target back to the shorter version for ease of user use</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## e.g. &quot;rosrun someones_pkg node&quot; instead of &quot;rosrun someones_pkg someones_pkg_node&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Rename C++ executable</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># set_target_properties(\${PROJECT_NAME}_node PROPERTIES OUTPUT_NAME node PREFIX &quot;&quot;)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Add cmake target dependencies of the executable</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## same as for the library above</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Add CMake target dependencies for the executable</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">add_dependencies</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Hello_VSCode \${</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">\${PROJECT_NAME}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">_EXPORTED_TARGETS} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">\${catkin_EXPORTED_TARGETS}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Specify libraries to link a library or executable target against</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Specify libraries to link against the executable</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">target_link_libraries</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Hello_VSCode</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  \${catkin_LIBRARIES}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#############</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Install ##</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#############</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># all install targets should use catkin DESTINATION variables</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># See http://ros.org/doc/api/catkin/html/adv_user_guide/variables.html</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Mark executable scripts (Python etc.) for installation</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## in contrast to setup.py, you can choose the destination</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Set executable scripts for installation</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">catkin_install_python(PROGRAMS</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  scripts/Hi.py</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  DESTINATION </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">\${CATKIN_PACKAGE_BIN_DESTINATION}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Mark executables for installation</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## See http://docs.ros.org/melodic/api/catkin/html/howto/format1/building_executables.html</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># install(TARGETS \${PROJECT_NAME}_node</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   RUNTIME DESTINATION \${CATKIN_PACKAGE_BIN_DESTINATION}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># )</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Mark libraries for installation</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## See http://docs.ros.org/melodic/api/catkin/html/howto/format1/building_libraries.html</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># install(TARGETS \${PROJECT_NAME}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   ARCHIVE DESTINATION \${CATKIN_PACKAGE_LIB_DESTINATION}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   LIBRARY DESTINATION \${CATKIN_PACKAGE_LIB_DESTINATION}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   RUNTIME DESTINATION \${CATKIN_GLOBAL_BIN_DESTINATION}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># )</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Mark cpp header files for installation</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># install(DIRECTORY include/\${PROJECT_NAME}/</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   DESTINATION \${CATKIN_PACKAGE_INCLUDE_DESTINATION}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   FILES_MATCHING PATTERN &quot;*.h&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   PATTERN &quot;.svn&quot; EXCLUDE</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># )</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Mark other files for installation (e.g. launch and bag files, etc.)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># install(FILES</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   # myfile1</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   # myfile2</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   DESTINATION \${CATKIN_PACKAGE_SHARE_DESTINATION}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># )</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#############</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Testing ##</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#############</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Add gtest based cpp test target and link libraries</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># catkin_add_gtest(\${PROJECT_NAME}-test test/test_demo01_hello_vscode.cpp)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># if(TARGET \${PROJECT_NAME}-test)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   target_link_libraries(\${PROJECT_NAME}-test \${PROJECT_NAME})</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># endif()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Add folders to be run by python nosetests</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># catkin_add_nosetests(test)</span></span></code></pre></div>`,10)])])}const A=a(p,[["render",t]]);export{o as __pageData,A as default};
