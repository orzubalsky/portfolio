from django import template

register = template.Library()

def tagged_projects_link(parser, token):
    try:
        # split_contents() knows not to split quoted strings.
        args = token.split_contents()
        if len(args) == 2:
            tag_name, tag_name = args

    except ValueError:
        raise template.TemplateSyntaxError, "%r tag requires two arguments" % token.contents.split()[0]

    return TaggedProjectsLinkNode(tag_name)

class TaggedProjectsLinkNode(template.Node):
    def __init__(self, tag_name):
        self.tag_name = tag_name

    def render(self, context):
        tag_name = self.tag_name
        
        context['tag_name'] = tag_name
        
        t = template.loader.get_template('tagged_projects_link.html')
        
        html = t.render(context)

        return html


register.tag('tagged_projects_link', tagged_projects_link)