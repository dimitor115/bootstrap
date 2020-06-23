---
layout: docs
title: Side menu
description: Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.
group: components
aliases:
  - "/components/"
  - "/docs/5.0/components/"
toc: true
---

## Examples

Alerts are available for any length of text, as well as an optional close button. For proper styling, use one of the eight **required** contextual classes (e.g., `.alert-success`). For inline dismissal, use the [alerts JavaScript plugin](#dismissing).

{{< example >}}
<div class="position-relative" style="height: 400px">
    <div id="exampleMenu" class="horizontal-nav">
        <nav class="nav py-2">
          <a class="nav-link active" href="#">
            <i class="fa fa-cloud nav-icon"></i>
            <div class="nav-title">
              Active Page
            </div>
          </a>
          <div class="nav-dropdown">
            <a class="nav-link" href="#">
               <i class="fa fa-address-book nav-icon"></i>
               <div class="nav-title"> Awesome Link </div>
            </a>
            <div class="nav-dropdown-menu">
                <a class="nav-link" href="#">
                   <div class="nav-title"> Awesome Link </div>
                </a>
                <a class="nav-link" href="#">
                   <div class="nav-title"> Awesome Link </div>
                </a>
            </div>
          </div>
          <a class="nav-link active" href="#">
            <i class="fa fa-beer nav-icon"></i>
            <div class="nav-title">
              Grab a Beer
            </div>
          </a>
        </nav>
        <button type="button" class="btn side-menu-toggler" data-toggle="side-menu" data-target="#exampleMenu">
        </button>
    </div>
</div>
{{< /example >}}




{{< example >}}
<div class="position-relative" style="height: 400px">
    <div id="exampleMenu" class="horizontal-nav">
        <nav class="nav py-2">
          <a class="nav-link active" href="#">
            <i class="fa fa-cloud nav-icon"></i>
            <div class="nav-title">
              Active Page
            </div>
          </a>
          <a class="nav-link" href="#">
            <i class="fa fa-address-book nav-icon"></i>
            <div class="nav-title">
              Awesome Link
            </div>
          </a>
          <a class="nav-link" href="#">
            <i class="fa fa-code-fork nav-icon"></i>
            <div class="nav-title">
              Link
            </div>
          </a>
          <a class="nav-link" href="#">
            <i class="fa fa-beer nav-icon"></i>
            <div class="nav-title">
              Grab a Beer
            </div>
          </a>
        </nav>
    </div>
</div>
{{< /example >}}

{{< example >}}
<div class="position-relative" style="height: 400px">
    <div id="exampleMenu" class="horizontal-nav nav-minimized">
        <nav class="nav py-2">
          <a class="nav-link active" href="#">
            <i class="fa fa-cloud nav-icon"></i>
            <div class="nav-title">
              Active Page
            </div>
          </a>
          <a class="nav-link" href="#">
            <i class="fa fa-address-book nav-icon"></i>
            <div class="nav-title">
              Awesome Link
            </div>
          </a>
          <a class="nav-link" href="#">
            <i class="fa fa-code-fork nav-icon"></i>
            <div class="nav-title">
              Link
            </div>
          </a>
          <a class="nav-link" href="#">
            <i class="fa fa-beer nav-icon"></i>
            <div class="nav-title">
              Grab a Beer
            </div>
          </a>
        </nav>
        <button type="button" class="btn side-menu-toggler" data-toggle="side-menu" data-target="#exampleMenu">
        </button>
    </div>
</div>
{{< /example >}}


{{< callout info >}}
{{< partial "callout-warning-color-assistive-technologies.md" >}}
{{< /callout >}}
