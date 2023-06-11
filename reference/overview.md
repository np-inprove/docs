# Overview

Every iNProve instance supports a multi-tenant architecture.

A tenant is known as an institution. All resources reside under an institution.

::: info

The term institution refers to the highest level of an educational organization (example: Ngee Ann Polytechnic, National University of Singapore, etc). This is different from an academic school (example: School of ICT).

:::

All other resources reside under the institution.

## Institution

An institution can only be created by users with __god mode__ enabled.

An institution has invite links, which determine the role a user will get.

No matter the role, the invite link is the only way for users to register an account on the iNProve platform.

Alternative method of registration such as emails may be introduced in the future.

::: info

This means every user is associated with one institution only. Users should register with their institution provided email address.

:::

### Roles

| Variant  | Remarks                                                          |
| -------- | ---------------------------------------------------------------- |
| Admin    | Institution admins are able to modify details of the institution |
| Educator | Educators are allowed to create group                            |
| Member   | Members are only allowed to join groups                          |

::: info

Institution roles are separate from group roles. A user can be an educator under an institution, but a member in a group, or vice versa.

:::

## Groups

Groups are used to share information between a collection of users. Most features of iNProve are accessed through a group.

For example, a group can be created for a module, or a Special Interest Group.

Similarly, users can join the group using an invite link, which will decide their role.

Alternative method of registration such as emails may be introduced in the future.

### Roles

Every member of a group is associated with a role.

| Role     | Permissions | Remarks                      |
| -------- | ----------- | ---------------------------- |
| Owner    | All         | There can be multiple owners |
| Educator | Restricted  | Usually lecturers            |
| Member   | Restricted  | Usually students             |

### Announcements

Announcements are used to distribute information to everyone in a group. Posting announcements are limited to Educator and Owner roles.

### Deadlines

Deadlines are tasks submitted by group members with a due date. Other members can upvote a deadline to signify importance or authenticity.

### Events

Events signify important dates / times. For example, an examination. Deadlines are shared with everyone in the group.

### Forums

Forums facilitate discussions between users. A forum must have a name, such as "General". A group can have multiple forums.

::: info

In a group which contains students of an entire module, forums can be used to split between classes.

Access control will be introduced in the future.

:::

#### Participation pancakes

Participation pancakes is a point system designed to increase class engagement.

When a member of a group reacts to a forum post with :pancakes:, the postee will receive 1 participation pancake.

This can be used to redeem [prizes](#prizes).

## Prizes

Prizes are redeemed using participation pancakes.

::: info

Prizes are managed at institution level, not group.

:::

### Pets

Every user has a __single__ pet. Accessories or food for the pets can be redeemed through prizes.

::: info

Redeeming prizes for pets cannot be managed by the institution. Every institution will have the same pets shared across the iNProve platform.

:::

### Vouchers

Vouchers such as Starbucks vouchers, etc. can be redeemed as well.

## Study plan

Study plans can be used for students to organize their timeline. A study plan can be shared to other users using a link.

::: info

Study plans are not associated with a group.

:::

### Milestones

Milestones are checkpoints within a study plan.
