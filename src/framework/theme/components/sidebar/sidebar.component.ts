/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Component, HostBinding, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { convertToBoolProperty } from '../helpers';

import { NgaSidebarService } from './sidebar.service';

/**
 * Sidebar header container.
 *
 * Placeholder which contains a sidebar header content,
 * placed at the very top of the sidebar outside of the scroll area.
 */
@Component({
  selector: 'nga-sidebar-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-content></ng-content>
  `,
})
export class NgaSidebarHeaderComponent {
}

/**
 * Sidebar content container.
 *
 * Placeholder which contains a sidebar main content.
 */
@Component({
  selector: 'nga-sidebar-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-content></ng-content>
  `,
})
export class NgaSidebarContentComponent {
}

/**
 * Sidebar footer container.
 *
 * Placeholder which contains a sidebar footer content,
 * placed at the very bottom of the sidebar outside of the scroll area.
 */
@Component({
  selector: 'nga-sidebar-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-content></ng-content>
  `,
})
export class NgaSidebarFooterComponent {
}

/**
 * Main sidebar component.
 *
 * Sidebar can be place on the left or right side of the layout, can be fixed (shown above the content)
 * or can push the layout when opened.
 *
 * @theme
 * $nga-sidebar-foreground: $nga-foreground-inverse !default;
 * $nga-sidebar-background: $nga-background-inverse !default;
 * $nga-sidebar-height: 100vh !default;
 * $nga-sidebar-width: 12rem !default;
 * $nga-sidebar-width-compact: 4rem !default;
 * $nga-sidebar-padding: $nga-padding !default;
 * $nga-sidebar-header-height: 3.5rem !default;
 * $nga-sidebar-footer-height: 3.5rem !default;
 *
 * @example
 *
 * Example of fixed sidebar located on the left side, initially collapsed.
 *
 * <nga-sidebar left fixed state="collapsed">
 *  <nga-sidebar-header>Header</nga-sidebar-header>
 *  <nga-sidebar-content>
 *    Menu or another component here
 *  </nga-sidebar-content>
 *  <nga-sidebar-footer>
 *    Footer components here
 *  </nga-sidebar-footer>
 * </nga-sidebar>
 */
@Component({
  selector: 'nga-sidebar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./sidebar.component.scss'],
  template: `
    <div class="scrollable">
      <ng-content select="nga-sidebar-header"></ng-content>
      <div class="main-container">
        <ng-content></ng-content>
      </div>
      <ng-content select="nga-sidebar-footer"></ng-content>
    </div>
  `,
})
export class NgaSidebarComponent implements OnInit {

  static readonly STATE_EXPANDED: string = 'expanded';
  static readonly STATE_COLLAPSED: string = 'collapsed';
  static readonly STATE_COMPACTED: string = 'compacted';

  protected stateValue: string;

  @HostBinding('class.fixed') fixedValue: boolean = false;
  @HostBinding('class.right') rightValue: boolean = false;
  @HostBinding('class.left') leftValue: boolean = false;

  @HostBinding('class.expanded')
  get expanded() {
    return this.stateValue === NgaSidebarComponent.STATE_EXPANDED;
  }
  @HostBinding('class.collapsed')
  get collapsed() {
    return this.stateValue === NgaSidebarComponent.STATE_COLLAPSED;
  }
  @HostBinding('class.compacted')
  get compacted() {
    return this.stateValue === NgaSidebarComponent.STATE_COMPACTED;
  }

  /**
   * Places sidebar on the left side
   * @type boolean
   */
  @Input()
  set right(val: boolean) {
    this.rightValue = convertToBoolProperty(val);
  }

  /**
   * Places sidebar on the right side
   * @type boolean
   */
  @Input()
  set left(val: boolean) {
    this.leftValue = convertToBoolProperty(val);
  }

  /**
   * Makes sidebar fixed (shown above the layout content)
   * @type boolean
   */
  @Input()
  set fixed(val: boolean) {
    this.fixedValue = convertToBoolProperty(val);
  }

  /**
   * Initial sidebar state, expanded|collapsed|compacted
   * @type string
   */
  @Input()
  set state(val: string) {
    this.stateValue = val;
  }

  /**
   * Tags a sidebar with some ID, can be later used in sidebar service
   * to determine which sidebar triggered the action, if multiple sidebars exist on the page.
   *
   * @type string
   */
  @Input() tag: string;

  constructor(private sidebarService: NgaSidebarService) { }

  ngOnInit() {
    // TODO: we need to unsubscribe from these on destroy
    this.sidebarService.toggleChanges.subscribe((data: { compact: boolean, tag: string }) => {
      if (!this.tag || this.tag === data.tag) {
        this.toggle(data.compact);
      }
    });

    this.sidebarService.expandChanges.subscribe((data: { tag: string }) => {
      if (!this.tag || this.tag === data.tag) {
        this.expand();
      }
    });

    this.sidebarService.collapseChanges.subscribe((data: { tag: string }) => {
      if (!this.tag || this.tag === data.tag) {
        this.collapse();
      }
    });
  }

  /**
   * Collapses the sidebar
   */
  collapse() {
    this.state = NgaSidebarComponent.STATE_COLLAPSED;
  }

  /**
   * Expands the sidebar
   */
  expand() {
    this.state = NgaSidebarComponent.STATE_EXPANDED;
  }

  /**
   * Compacts the sidebar (minimizes)
   */
  compact() {
    this.state = NgaSidebarComponent.STATE_COMPACTED;
  }

  /**
   * Toggles sidebar state (expanded|collapsed|compacted)
   * @param compact boolean If true, then sidebar state will be changed between expanded & compacted,
   * otherwise - between expanded & collapsed. False by default.
   */
  toggle(compact: boolean = false) {
    const closedStates = [NgaSidebarComponent.STATE_COMPACTED, NgaSidebarComponent.STATE_COLLAPSED];
    if (compact) {
      this.state = closedStates.indexOf(this.stateValue) >= 0 ?
        NgaSidebarComponent.STATE_EXPANDED : NgaSidebarComponent.STATE_COMPACTED;
    } else {
      this.state = closedStates.indexOf(this.stateValue) >= 0 ?
        NgaSidebarComponent.STATE_EXPANDED : NgaSidebarComponent.STATE_COLLAPSED;
    }
  }
}