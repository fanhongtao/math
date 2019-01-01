---
layout: post
title: 三角形角平分线判定定理
categories: 几何
tags: [三角形]
copyright: cn
book: 数学瑰宝
---

在 $\triangle ABC$ 中，点 $D$ 是边 $BC$ 上的一点，若 $\frac{BD}{DC} = \frac{AB}{AC}$，则 $AD$ 平分 $\angle A$ 。

<!--more-->

## 证明

由 [共边比例定理]({{ site.baseurl }}{% link _posts/2018-06-20-gong-bian-bi-li-ding-li.md %}) ，有：

$$ \frac{S_{\triangle BAD}}{S_{\triangle DAC}} = \frac{BD}{DC} = \frac{AB}{AC} = \frac{AB \cdot AD}{AD \cdot AC} $$

再由 [共角比例逆定理]({{ site.baseurl }}{% link _posts/2018-07-05-gong-jiao-bi-li-ni-ding-li.md %}) 知， $\angle BAD$ 与 $\angle DAC$ 相等或互补。

而 $\angle BAD$ 与 $\angle DAC$ 均为锐角，故 $\angle BAD = \angle DAC$。

即 $AD$ 平分 $\angle A$ 。

* content
{:toc}
