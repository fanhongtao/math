---
layout: post
title: 等腰三角形性质定理
categories: 几何
tags: [三角形]
copyright: cn
book: 数学瑰宝
---

在 $\triangle ABC$ 中，若 $ AB = AC $ ，则 $\angle B = \angle C$。

<!--more-->

## 证明

用反证法。假定 $\angle B \neq \angle C$，不妨设 $\angle B > \angle C$，由 [共角比例不等式]({{ site.baseurl }}{% link _posts/2018-06-26-gong-jiao-bi-li--bu-deng-shi.md %})，得

$$ 1 = \frac{S_{\triangle ABC}}{S_{\triangle ACB}} > \frac{AB \cdot BC}{AC \cdot BC} = \frac{AB}{AC}$$

推出 $ AC > AB $，与 $ AB = AC $ 矛盾，故 $\angle B = \angle C$ 。

* content
{:toc}
